import React from 'react'

export const Offcanvas = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s" id="offcanvas-intro">
                        <h2> Off canvas</h2>
                        <p className="mb-4"> Create an off-canvas sidebar that slides in and out of the page, which
                            is perfect for creating mobile navigations.</p>
                        <p> You can use any element to toggle an off-canvas sidebar.
                            To
                            enable the necessary JavaScript, add the <code>uk-toggle</code> attribute. An <code>&lt;a&gt;</code> element needs to be linked to the id of the off-canvas
                            container. If
                            you are using another element, like a button, just add the <code>uk-toggle="target:
                                #ID"</code> attribute to target the id of the off-canvas container. </p>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Open</button>
                        <Link to="#offcanvas-usage" uk-toggle>Open</Link>
                        <div id="offcanvas-usage" uk-offcanvas>
                            <div className="uk-offcanvas-bar bg-primary">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #basico"> MARKUP</button>
                            <div id="basico" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fwyfg" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-usage"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#offcanvas-usage"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-usage"</span> <span className="hljs-attr">uk-offcanvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Overlay">Overlay</h3>
                        <p> To add an overlay, blanking out the page, add the <code className="bg-white">overlay:
                            true</code> parameter to the <code className="bg-white">uk-offcanvas</code> attribute.</p>
                        <button className="button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay">Open</button>
                        <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #overlay"> MARKUP</button>
                            <div id="overlay" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fwyfh" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-overlay"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-overlay"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Flip-modifier">Flip modifier</h3>
                        <p> Add the <code>flip: true</code> parameter to the <code>uk-offcanvas</code> attribute to adjust its alignment, so that it slides in
                            from the
                            right.</p>
                        <button className="button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip">Open</button>
                        <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                            <div className="uk-offcanvas-bar">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Flip"> MARKUP</button>
                            <div id="Flip" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fwyfi" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-flip"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-flip"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"flip: true; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Animation-modes"> Animation modes</h3>
                        <p> By default, the off-canvas slides in. But you can
                            actually choose
                            between different animation modes for the off-canvas' entrance. Just add one of the
                            following attributes</p>
                        <div className="uk-margin-medium">
                            <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"my-id"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: push"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        </div>
                        <div className="uk-overflow-auto uk-margin-medium-bottom">
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th align="left">Parameter</th>
                                        <th align="left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left"><code>mode: slide</code></td>
                                        <td align="left">The off-canvas slides out and overlays the content.
                                            This is
                                            the
                                            default mode.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>mode: push</code></td>
                                        <td align="left">The off-canvas slides out and pushes the site.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>mode: reveal</code></td>
                                        <td align="left">The off-canvas slides out and reveals its content while
                                            pushing the
                                            site.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>mode: none</code></td>
                                        <td align="left">The off-canvas appears and overlays the content without
                                            an
                                            animation.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-slide">Slide</button>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-push">Push</button>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-reveal">Reveal</button>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-none">None</button>
                        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
                            <div className="uk-offcanvas-bar">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
                            <div className="uk-offcanvas-bar">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div id="offcanvas-none" uk-offcanvas="mode: none; overlay: true">
                            <div className="uk-offcanvas-bar">
                                <button className="uk-offcanvas-close" type="button" uk-close />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Animate"> MARKUP</button>
                            <div id="Animate" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fwyfj" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-slide"</span>&gt;</span>Slide<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-push"</span>&gt;</span>Push<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-reveal"</span>&gt;</span>Reveal<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-none"</span>&gt;</span>None<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-slide"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-push"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: push; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-reveal"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: reveal; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-none"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: none; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="side-nav"> Side nav </h3>
                        <p> You can use the Side nav inside an off-canvas to create a mobile navigation or
                            Custom navigation</p>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-navigation">Open</button>
                        <Link to="#offcanvas-navigation" uk-toggle>Open</Link>
                        <div id="offcanvas-navigation" uk-offcanvas>
                            <div className="uk-offcanvas-bar bg-primary">
                                <button className="uk-offcanvas-close uk-icon-button" type="button" uk-close />
                                <div className="side-nav">
                                    <div className="side-nav-title"> Main Navigation </div>
                                    <ul>
                                        <li> <Link to="#"> <i className="far fa-home" /> Homepage</Link></li>
                                        <li> <Link to="#"> <i className="far fa-shopping-cart" /> Shop</Link></li>
                                        <li> <Link to="#"> <i className="far fa-file" /> Pages</Link></li>
                                        <li> <Link to="#"> <i className="far fa-file-alt" /> Blog</Link></li>
                                        <li> <Link to="#"> <i className="far fa-map" /> Contact</Link></li>
                                        <li> <Link to="#"> <i className="far fa-comment-alt" /> help</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #side-navs"> MARKUP</button>
                            <div id="side-navs" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-k0rqc7a2" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@s uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#offcanvas-navigation"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-navigation"</span> <span className="hljs-attr">uk-offcanvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar bg-primary uk-padding-remove"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close uk-icon-button"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"side-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"side-nav-title"</span>&gt;</span> Main Navigation <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-home"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Homepage<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-shopping-cart"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Shop<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-file"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Pages<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-file-alt"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Blog<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-map"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Contact<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-comment-alt"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> help<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> <Link to="#offcanvas-intro" uk-scroll> Introduction </Link></li>
                            <li> <Link to="#Overlay" uk-scroll> Overlay </Link></li>
                            <li> <Link to="#Flip-modifier" uk-scroll> Flip modifier </Link></li>
                            <li> <Link to="#Animation-modes" uk-scroll> Animation modes </Link></li>
                            <li> <Link to="#side-nav" uk-scroll> Side nav </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}
