import React from 'react';
import {data} from './WrappedData.js'
import { Stack, Box, Heading, Text } from '@chakra-ui/react'


export default function TotalScore({data}) {
    // these nums are pecentages
    let totalSpent = 0;
    let totalGoals = 0;
    let spent = 0;
    let goal = 0;
    for (let i = 0; i < data.length; i++) {
        spent = data[i].Spent.slice(0, data[i].Spent.length - 1);
        totalSpent += parseInt(spent);

        goal = data[i].Goal.slice(0, data[i].Goal.length - 1);
        totalGoals += parseInt(goal);
    } 

    // is spent == goals score is 100, otherwise itll be less/more
    let score = 0;
    if (totalSpent == totalGoals){
        score = 100;
    }
    else {
        score = 200 - (totalSpent/totalGoals)*100
    }


    return (
        <div className="totalScore">
            <Text fontSize={20}>Your score for this period is</Text>
            <Text fontSize={30}>{score}</Text>
        </div>
    );
}