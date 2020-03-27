import React, { Component } from 'react'
import './slider.css';
import axios from 'axios'
import SliderTitle from './SliderTitle';
import Movie from './movie';

export class Slider extends Component {
    constructor(props) {
        super(props)
        this.containerRef = React.createRef();
        this.itemRef = React.createRef();
        this.state = {
            title:"",
            desc:"",
            Width: 0,
            sliderPage: 1,
            posts: [],
            max: 5
        }
        this.slideRight = this.slideRight.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.addTitleCenter = this.addTitleCenter.bind(this);
    }

    slideRight(){
        
        const containerWidth = this.containerRef.current.clientWidth;

      
        if((this.state.sliderPage * this.state.max) < this.state.posts.length){
            this.setState({Width: containerWidth, sliderPage : this.state.sliderPage + 1});
            this.containerRef.current.style.transform =  `translate(-${containerWidth * this.state.sliderPage}px)`;
        }else{
            this.setState({Width: containerWidth, sliderPage : 1});
            this.containerRef.current.style.transform =  `translate(0px)`;
        }
     

    }

    updateDimensions(){
        this.setState({

            Width: this.containerRef.current.clientWidth,
        },
    function(){  
      const containerWidth = this.containerRef.current.clientWidth;
      if(this.state.sliderPage > 1){
          this.containerRef.current.style.transform =  `translate(-${containerWidth * (this.state.sliderPage - 1)}px)`;
      }
     
    

    });

    if(window.innerWidth < 499){
        this.setState({max : 2});
    }else if(window.innerWidth < 781){
        this.setState({max : 3});
    }else{
        this.setState({max : 5});
    }
}


    
      getMoviePages = async i => {
        
        let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=07ac3ec05d3f7f7c855f9e4befb6bed6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&primary_release_date.gte=${this.props.year}&with_companies=${this.props.company}`);
      
        var fetheced = new Array();
        fetheced = res.data.results;
        fetheced = fetheced.filter(word => word.poster_path != null);

        const allpost = this.state.posts.concat(fetheced);
      
        console.log(allpost, "aall");
        console.log(fetheced, "aall2");
        this.setState(prevState => ({
            posts: [...prevState.posts, ...fetheced]}));

            console.log(this.state.posts);
        return res;
      };

      componentDidUpdate(prevProps){
          
          if (this.props.year !== prevProps.year) {
            console.log("NEW PROPS");
            this.setState({sliderPage : 1});
            this.fetchMovies();
          }
      }
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
        this.fetchMovies();
    }

    fetchMovies(){
        console.log(this.props.year);
        //get movie data from api
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=07ac3ec05d3f7f7c855f9e4befb6bed6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${this.props.year}&with_companies=${this.props.company}`)
        .then(response => {
          
            const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

            var fetheced = new Array();
            fetheced = response.data.results;
           
            fetheced = fetheced.filter(word => word.poster_path != null);

            this.setState({ posts : fetheced});

            console.log(response.data.total_pages);
            if(response.data.total_pages > 1){
                let ids = Array.from({length: response.data.total_pages, start: 1}, (v, k) => k+1)
                ids.shift();
                Promise.all(ids.map(id => this.getMoviePages(id))).then(
                    this.updateDimensions()
                );
        
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    addTitleCenter(e){
        var parent = e.target.querySelector('.child');
        console.log(parent);
    }
   

    render() {
        let style = {width:"auto"}
        let classDisabled = "";
        let classHidden = "";
        const {posts} = this.state
        if(this.state.posts.length <= 5){
            classDisabled = "pure-button-disabled";
        }
        if(this.state.posts.length <= 0){
            classHidden = "hidden";
        }
        return (
          
            <div className={`slider_wrap ${classHidden}`}>
                <SliderTitle current={this.state.sliderPage} max={this.state.max} title={this.props.title} amount={this.state.posts.length}></SliderTitle>
                <div className="moviesContain">
                    <ul ref={this.containerRef}>
                        {posts.map(item => <Movie key={item.id} onClick={this.addTitleCenter} backg={item.poster_path} id={item.id} popularity={item.popularity} release={item.release_date} title={item.original_title} overview={item.overview} url={item.poster_path}></Movie> )}
                    </ul>
                </div>
                <button className={`pure-button pure-button-primary ${classDisabled}`} onClick={this.slideRight }>slide right</button>
            </div>
        )
    }


}

export default Slider
