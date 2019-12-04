import React from 'react'
import ReactDOM from 'react-dom'

import JobsList from "../components/JobsList";
import Chat from "../components/Chat";

document.addEventListener("DOMContentLoaded", () => {
    $(".conversation-preview").on("click", function() {
      window.location.href = $(this).data("url");
    });
});

document.addEventListener('DOMContentLoaded', ()=>{
    const jobDiv = document.getElementById("jobs");

    if(jobDiv !== null){
        ReactDOM.render(
            <JobsList {...JSON.parse(jobDiv.dataset.props)} />,
            jobDiv
        )
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    const jobDiv = document.getElementById("job");

    if(jobDiv !== null){
        ReactDOM.render(
            <Chat {...JSON.parse(jobDiv.dataset.props)} />,
            jobDiv
        )
    }
})