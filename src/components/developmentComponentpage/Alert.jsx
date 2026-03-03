import React from 'react'

const Alert = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Alert</h2>
                        <p className="mb-4">Display success, primary and error messages.</p>
                        <h6 id="alert-Introduction"> Basic alert </h6>
                        <p> To apply this component, add the <code>uk-alert</code> attribute to a block element. </p>
                        <h6> PREVIEW </h6>
                        <div uk-alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore magna aliqua.</div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Basic"> MARKUP</button>
                            <div id="Basic" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre><code id="code-k0ow5jza" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-alert</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h6 id="Close-button"> Close button </h6>
                        <p> To create a close button and enable its functionality, add
                            the <code>.uk-alert-close</code> class to a <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> element inside the alert box. To apply a close icon, add the <code>uk-close</code> attribute . </p>
                        <h6> PREVIEW </h6>
                        <div uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <h4>Notice</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut
                                labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Close-btnz"> MARKUP
                            </button>
                            <div id="Close-btnz" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre>{"                                                    "}{"\t"}<code id="code-k0ow5jzc" className="lang-html hljs xml">{"\n"}{"                                                    "}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> {"\n"}{"                                                    "}{"\t"}{"\t"}<span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Notice<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</pre>
                            </div>
                        </div>
                        <h6 id="Style-modifiers"> Style modifiers </h6>
                        <p> There are several style modifiers available <br />
                            <code>.uk-alert-primary</code> <code>.uk-alert-success</code> <code>.uk-alert-danger</code></p>
                        <h6> PREVIEW </h6>
                        <div className="uk-alert-primary" uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt. </p>
                        </div>
                        <div className="uk-alert-success" uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt. </p>
                        </div>
                        <div className="uk-alert-danger" uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt. </p>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Style-modifier"> MARKUP</button>
                            <div id="Style-modifier" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre><code id="code-k0owe56e" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-primary"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-success"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-primary"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-danger"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h6 id="Backgrounds-Gradient"> Backgrounds Gradient </h6>
                        <p> apply background Gradient color < Link to="https://wpkixx.com/html/socimo/colors.html"> backgrounds
                            Gradient </Link> <code>.uk-light </code> change text color to Light</p>
                        <h6> PREVIEW </h6>
                        <div className="bg-gradient-primary uk-light" uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt. </p>
                        </div>
                        <div className="bg-gradient-success uk-light" uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt. </p>
                        </div>
                        <div className="bg-gradient-danger uk-light" uk-alert> <Link to="#" className="uk-alert-close" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt. </p>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Background-Gradient"> MARKUP</button>
                            <div id="Background-Gradient" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre><code id="code-k0owkxvl" className="lang-html hljs xml"> <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-primary uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-success uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-primary uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-danger uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> <Link to="#alert-Introduction" uk-scroll> Introduction </Link></li>
                            <li> <Link to="#Close-button" uk-scroll> Close Button </Link></li>
                            <li> <Link to="#Style-modifiers" uk-scroll> Style modifiers</Link></li>
                            <li> <Link to="#Backgrounds-Gradient" uk-scroll> Backgrounds gradient </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Alert