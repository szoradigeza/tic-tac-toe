import {Component} from "react";
import React from "react";
import './square.css'
import {Button} from 'react-bootstrap';


export function Square(props){
        return(
            <Button className='game-button'
                    onClick={() => props.onClick()}>
                {props.value}
            </Button>
        )
}
