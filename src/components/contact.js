import React from 'react';
import GuestLayout from './guest-layout';

export default () => (
    <GuestLayout>
        <section className="hero is-primary is-bold is-fullheight"> 
            <div className="hero-body">
                <section className="m-t-lg">
                    <div className="container p-l-md p-r-md">
                        <article class="message is-dark">
                            <div class="message-body title is-2 has-text-dark">
                                (661)675-6864                            
                            </div>
                        </article>
                        <article class="message is-dark">
                            <div class="message-body title is-2 has-text-dark">
                                <a class="pure-button" href="mailto:alexjlopez96@gmail.com" target="_blank" rel="noopener noreferrer">alexjlopez96@gmail.com</a>               
                            </div>
                        </article>
                        <article class="message is-dark">
                            <div class="message-body title is-2 has-text-dark">
                                <a class="pure-button" href="mailto:lopez@spu.edu" target="_blank" rel="noopener noreferrer">lopez@spu.edu</a>                            
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    </GuestLayout>
);