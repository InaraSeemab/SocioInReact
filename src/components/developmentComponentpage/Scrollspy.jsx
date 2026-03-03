import React from 'react'

const Scrollspy = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Scrollspy </h2>
                        <p className="mb-4"> Trigger events and animations while scrolling your page. </p>
                        <p id="scroll-basic">The Scrollspy component listens to page scrolling and
                            trigger
                            events based on the scroll position. For example, if you scroll down a page, and an
                            element
                            appears in the viewport for the first time, you can trigger a smooth animation to
                            fade in
                            the element. Just add the uk-scrollspy attribute which takes the following options. </p>
                        <div className="uk-child-width-1-2@m uk-grid-match  uk-margin-large" uk-grid>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                                    <h4 className="uk-card-title">Left</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                                    <h4 className="uk-card-title">Right</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #basicz"> MARKUP</button>
                            <div id="basicz" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0g13hv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@m uk-grid-match"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-slide-left; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-slide-right; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <br />
                        <p>This example uses the <code>repeat: true</code> option. Scroll up and down to see the
                            triggered
                            animations. The layout is made with the <Link to="/card">Card
                                component</Link>. </p>
                        <h3 className="uk-margin-medium-top" id="scroll-groups">Groups </h3>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"target: &gt; div; cls: uk-animation-fade; delay: 500"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <p>You can also group scrollspy elements, so you won't have
                            to apply
                            the attribute to each of them. Just add the <code>uk-scrollspy="target:
                                SELECTOR"</code> attribute to a container element, targeting the selector of the items you want
                            to
                            animate
                            inside the container. When using a delay, it will be applied cumulatively to the
                            items that
                            scroll into view.. </p>
                        <div className="uk-child-width-1-2@m uk-margin-large" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Fade</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Fade</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Fade</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Fade</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Fade</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Fade</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Groups"> MARKUP</button>
                            <div aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0g13hw" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <br />
                        <p>This example uses the <code>repeat: true</code> option. Scroll up and down to see
                            the
                            triggered
                            animations. The layout is made with the <Link to="/card">Card
                                component</Link>. </p>
                        <h3 className="uk-margin-medium-top" id="target-element">Set <code>cls</code> option per
                            target </h3>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"target: &gt; div; cls: uk-animation-fade; delay: 500"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy-class</span>=<span className="hljs-string">"uk-animation-slide-top"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy-class</span>=<span className="hljs-string">"uk-animation-slide-bottom"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <p>You can also give each target a separate <code>cls</code> option.
                            Just add the <code>uk-scrollspy-class="CLASS"</code> attribute to a target
                            element.
                            It will
                            override the <code>cls</code> option set on the component </p>
                        <div className="uk-child-width-1-2@m  uk-margin-medium" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Bottom</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body" uk-scrollspy-class="uk-animation-slide-top">
                                    <h4 className="uk-card-title">Top</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h4 className="uk-card-title">Bottom</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #target-element"> MARKUP</button>
                            <div id="scroll-element" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0g13hx" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span> <span className="hljs-attr">uk-scrollspy-class</span>=<span className="hljs-string">"uk-animation-slide-top"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Top<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> <Link to="#scroll-basic" uk-scroll>Basic Scrollspy </Link></li>
                            <li> <Link to="#scroll-groups" uk-scroll> Groups </Link></li>
                            <li> <Link to="#scroll-element" uk-scroll> target element </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Scrollspy