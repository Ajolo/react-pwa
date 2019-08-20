import React from 'react';
import GuestLayout from './guest-layout';

export default () => (
    <GuestLayout>
        <section className="hero is-primary is-bold is-small"> 
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        spu2you
                    </h1>
                </div>
            </div>
        </section>

        <section className="m-t-lg">
            <div className="container p-l-md p-r-md">
                <div className="box p-l-md p-r-md">
                <div className="subtitle is-4">
                    <p>
                    In order to help assist students in experiencing a more complete, yet remote 
                    educational experience, I have helped in part to develop                             
                    <a href="https://spu2you.herokuapp.com/" target="_blank"> spu2you</a>.
                    By teaming with OhmniLabs and leveraging their telepresence robots, spu2you
                    would allow students to reserve and connect to a given robot and attend class from
                    the comfort of home. Built using React.js and leveraging Azure Cloud Services
                    such as Azure AD and Azure Functions. 
                    </p>
                </div>
                </div>
            </div>
        </section>
        <br/>

        <section className="hero is-primary is-bold is-small"> 
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        deadsimplenotes
                    </h1>
                </div>
            </div>
        </section>

        <section className="m-t-lg">
            <div className="container p-l-md p-r-md">
                <div className="box p-l-md p-r-md">
                <div className="subtitle is-4">
                    <p>
                    This simple, open-source note-taking application helped me to 
                    better understand cloud hosting services, http request technology, 
                    as well as simple database logic by leveraging Google's Firebase 
                    service. Ultimately, this app proved useful in helping me to learn 
                    much of the technology that would be necessary to implement in some 
                    form for the spu2you project above. Uses vanilla JavaScript, Electron.js
                    for parallel web and desktop development, and the Firebase Realtime 
                    Database, making asynchronous calls to retrieve and store data. Live site 
                    hosted at 
                    <a href="https://deadsimplenotes.com" target="_blank"> deadsimplenotes.com</a>.
                    </p>
                </div>
                </div>
            </div>
        </section>
        <br/>

        <section className="hero is-primary is-bold is-small"> 
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        aboto
                    </h1>
                </div>
            </div>
        </section>

        <section className="m-t-lg">
            <div className="container p-l-md p-r-md">
                <div className="box p-l-md p-r-md">
                <div className="subtitle is-4">
                    <p>
                    Basic Discord bot that is being actively developed. Notable features thus 
                    far are the weather commands, allowing users to retrieve localized 
                    weather reports based on zip code, Youtube music streaming from 
                    within voice calls, and Google search results displayed in chat. 
                    Made possible with Discord.js, the OpenWeatherMap API, Zenserp, and Heroku!
                    </p>
                </div>
                </div>
            </div>
        </section>
        <br/>

        <section className="hero is-primary is-bold is-small"> 
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        ajolo.dev
                    </h1>
                </div>
            </div>
        </section>

        <section className="m-t-lg">
            <div className="container p-l-md p-r-md">
                <div className="box p-l-md p-r-md">
                <div className="subtitle is-4">
                    <p>
                    This most recent iteration of ajolo.dev was built using React as an explorative
                    attempt of Progressive Web Applications. Complete with SEO, this application was 
                    made possible with Heroku, Bulma CSS, and 
                    <a href="https://reactpwa.com" target="_blank"> ReactPWA</a> for boilerplate. 
                    </p>
                </div>
                </div>
            </div>
        </section>
        <br/>
    </GuestLayout>
);