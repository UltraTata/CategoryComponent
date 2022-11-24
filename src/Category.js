import "./App.css"
import PropTypes from 'prop-types';

export default function Category(props){
    const dotStyle = {
        backgroundColor: props.color == undefined ? "grey" : props.color
    };
    const nStyle = {
        color: props.color == undefined ? "grey" : props.color
    };
    return(
        <div class="col-sm">
            <div class="row">
                <div class="col-1 d-flex align-items-center">
                    <div>
                        <span class="dot" style={dotStyle}></span>
                    </div>
                </div>
                <div class={props.col == undefined ? "col-5" : "col-"+props.col}>
                    <div style={{justifyContent: "center"}}>
                        <b>{props.children}</b>
                        <br></br>
                        {
                            props.quantity == undefined 
                            ?
                            <></>
                            :
                            <>
                                {
                                    props.quantity == 0
                                    ?
                                    <span>No {props.object}</span>
                                    :
                                    <span><b style={nStyle}></b> 
                                        {
                                            props.quantity == 1 && props.objectSingular != undefined
                                            ?
                                            <span><b style={nStyle}>1</b> {props.objectSingular}</span>
                                            :
                                            <span><b style={nStyle}>{props.quantity}</b> {props.object}</span>
                                        }
                                    </span>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

Category.propTypes = {
    color: PropTypes.string,
    object: PropTypes.string,
    objectSingular: PropTypes.string,
    col: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
}