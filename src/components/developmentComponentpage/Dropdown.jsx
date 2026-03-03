import React from 'react'

export const Dropdown = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Dropdown</h2>
                        <p className="mb-4">Defines different styles for a toggleable dropdown. </p>
                        <p id="drop-intro">Basically, a dropdown is a specific case of the < Link to="https://getuikit.com/docs/drop">drop</Link> that provides its own styling. Any
                            content, like a button, can toggle a dropdown. Just add the <code>uk-dropdown</code> attribute to a block element following the toggle.</p>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
                        <h6> PREVIEW </h6>
                        <div className="uk-inline uk-display-inline-block">
                            <button className="button uk-button-default dropdown-arrow dropdown-arrow" type="button">Hover</button>
                            <div uk-dropdown>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                                incididunt.</div>
                            <button className="button uk-button-default dropdown-arrow" type="button">Click</button>
                            <div uk-dropdown="mode: click">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do
                                eiusmod tempor incididunt.</div>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #basic"> MARKUP</button>
                            <div id="basic" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fhw06" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline uk-display-inline-block"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline uk-display-inline-block"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Click<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"mode: click"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Nav-in-dropdown"> Nav in dropdown </h3>
                        <p> </p>
                        <h6> PREVIEW </h6>
                        <button className="button uk-button-default dropdown-arrow" type="button">Hover</button>
                        <div uk-dropdown>
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-nav-header">Header</li>
                                <li>< Link to="#">list Item</Link></li>
                                <li className="uk-active">< Link to="#">Active</Link></li>
                                <li>< Link to="#">list Item</Link></li>
                                <li>< Link to="#">list Item</Link></li>
                                <li className="uk-nav-divider" />
                                <li>< Link to="#">list Item</Link></li>
                            </ul>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Nav"> MARKUP</button>
                            <div id="Nav" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fhw07" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default dropdown-arrow"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Grid-in-dropdown"> Grid in
                            dropdown </h3>
                        <p> You can place a grid from the < Link to="https://wpkixx.com/html/socimo/elements-grid.html"> Grid
                            page </Link> inside a dropdown, which can hold a navigation or any other
                            content.
                            Just wrap
                            the content with a <code>&lt;div&gt;</code> element and add the <code>uk-grid</code> attribute. If the grid should stack automatically, whenever the dropdown no
                            longer
                            fits its
                            container, just add the <code>.uk-dropdown-grid</code> class. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-width-1-3@m">
                            <button className="button uk-button-default dropdown-arrow" type="button">Hover</button>
                            <div className="uk-width-large" uk-dropdown>
                                <div className="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
                                    <div>
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li className="uk-nav-header">Header</li>
                                            <li>< Link to="#">list Item</Link></li>
                                            <li className="uk-active"><Link to="#">Active</Link></li>
                                            <li><Link to="#">list Item</Link></li>
                                            <li><Link to="#">list Item</Link></li>
                                            <li className="uk-nav-divider" />
                                            <li><Link to="#">list Item</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li className="uk-nav-header">Header</li>
                                            <li>< Link to="#">list Item</Link></li>
                                            <li className="uk-active"><Link to="#">Active</Link></li>
                                            <li><Link to="#">list Item</Link></li>
                                            <li><Link to="#">list Item</Link></li>
                                            <li className="uk-nav-divider" />
                                            <li><Link to="#">list Item</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Grid"> MARKUP</button>
                            <div id="Grid" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fhw08" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-large"</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-dropdown-grid uk-child-width-1-2@m"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="dropdown-Position"> Position </h3>
                        <p> Add one of the following options to the <code> uk-dropdown</code> attribute to adjust the dropdown's alignment. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-inline">
                            <button className="button uk-button-default dropdown-arrow" type="button">Top
                                Right</button>
                            <div uk-dropdown="pos: top-right">
                                <ul className="uk-nav uk-dropdown-nav">
                                    <li className="uk-nav-header">Header</li>
                                    <li>< Link to="#">list Item</Link></li>
                                    <li className="uk-active"><Link to="#">Active</Link></li>
                                    <li><Link to="#">list Item</Link></li>
                                    <li><Link to="#">list Item</Link></li>
                                    <li className="uk-nav-divider" />
                                    <li><Link to="#">list Item</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="uk-inline">
                            <button className="button uk-button-default dropdown-arrow" type="button">Bottom
                                Justify</button>
                            <div uk-dropdown="pos: bottom-justify">
                                <ul className="uk-nav uk-dropdown-nav">
                                    <li className="uk-nav-header">Header</li>
                                    <li>< Link to="#">list Item</Link></li>
                                    <li className="uk-active"><Link to="#">Active</Link></li>
                                    <li><Link to="#">list Item</Link></li>
                                    <li><Link to="#">list Item</Link></li>
                                    <li className="uk-nav-divider" />
                                    <li><Link to="#">list Item</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="uk-inline">
                            <button className="button uk-button-default dropdown-arrow-right" type="button">Right
                                Center</button>
                            <div uk-dropdown="pos: right-center">
                                <ul className="uk-nav uk-dropdown-nav">
                                    <li className="uk-nav-header">Header</li>
                                    <li>< Link to="#">list Item</Link></li>
                                    <li className="uk-active"><Link to="#">Active</Link></li>
                                    <li><Link to="#">list Item</Link></li>
                                    <li><Link to="#">list Item</Link></li>
                                    <li className="uk-nav-divider" />
                                    <li><Link to="#">list Item</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Position"> MARKUP</button>
                            <div id="Position" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fhw09" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Top Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"pos: top-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Bottom Justify<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"pos: bottom-justify"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Right Center<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"pos: right-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <div className="uk-overflow-auto uk-margin-large-top">
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th align="left">Position</th>
                                        <th align="left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left"><code>bottom-left</code></td>
                                        <td align="left">Aligns the dropdown to the bottom left.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>bottom-center</code></td>
                                        <td align="left">Aligns the dropdown to the bottom center.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>bottom-right</code></td>
                                        <td align="left">Aligns the dropdown to the bottom right.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>bottom-justify</code></td>
                                        <td align="left">Aligns the dropdown to the bottom and justifies its
                                            width to
                                            the
                                            related element.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>top-left</code></td>
                                        <td align="left">Aligns the dropdown to the top left.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>top-center</code></td>
                                        <td align="left">Aligns the dropdown to the top center.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>top-right</code></td>
                                        <td align="left">Aligns the dropdown to the top right.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>top-justify</code></td>
                                        <td align="left">Aligns the dropdown to the top and justifies its width
                                            to the
                                            related element.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>left-top</code></td>
                                        <td align="left">Aligns the dropdown to the left top.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>left-center</code></td>
                                        <td align="left">Aligns the dropdown to the left center.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>left-bottom</code></td>
                                        <td align="left">Aligns the dropdown to the left bottom.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>right-top</code></td>
                                        <td align="left">Aligns the dropdown to the right top.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>right-center</code></td>
                                        <td align="left">Aligns the dropdown to the right center.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>right-bottom</code></td>
                                        <td align="left">Aligns the dropdown to the right bottom.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Offset"> Offset </h3>
                        <p> To define a custom offset between the dropdown container and the
                            toggle, add the <code>offset</code> option with a value for the offset, measured in
                            pixels. </p>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"offset: 80"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <h6> PREVIEW </h6>
                        <button className="button uk-button-default dropdown-arrow" type="button">Hover</button>
                        <div uk-dropdown="offset: 40">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-nav-header">Header</li>
                                <li>< Link to="#">list Item</Link></li>
                                <li className="uk-active"><Link to="#">Active</Link></li>
                                <li><Link to="#">list Item</Link></li>
                                <li><Link to="#">list Item</Link></li>
                                <li className="uk-nav-divider" />
                                <li><Link to="#">list Item</Link></li>
                            </ul>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Ofset"> MARKUP</button>
                            <div id="Ofset" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fhw0c" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"offset: 80"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Animation"> Animation </h3>
                        <p> Apply one or more animations to the dropdown by adding the <code>animation:
                            uk-animation-*</code> option with one of the classes from the <Link to="/animation">Animation component</Link>. You can also
                            determine
                            the animation's duration. Just add the <code>duration</code> option with your value. </p>
                        <h6> PREVIEW </h6>
                        <button className="button uk-button-default" type="button">Hover</button>
                        <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-active">< Link to="#">Active</Link></li>
                                <li>< Link to="#">Item</Link></li>
                                <li className="uk-nav-header">Header</li>
                                <li>< Link to="#">Item</Link></li>
                                <li>< Link to="#">Item</Link></li>
                                <li className="uk-nav-divider" />
                                <li>< Link to="#">Item</Link></li>
                            </ul>
                        </div>
                        <div>
                            <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Animations"> MARKUP</button>
                            <div id="Animations" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0fhw0d" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"animation: uk-animation-slide-top-small; duration: 1000"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> < Link to="#drop-intro" uk-scroll> Introduction </Link></li>
                            <li> < Link to="#Nav-in-dropdown" uk-scroll> Nav in dropdown </Link></li>
                            <li> < Link to="#Grid-in-dropdown" uk-scroll>Grid-in-dropdown </Link></li>
                            <li> < Link to="#dropdown-Position" uk-scroll> dropdown-Position </Link></li>
                            <li> < Link to="#Offset" uk-scroll> Offset </Link></li>
                            <li> < Link to="#Animation" uk-scroll> Animation </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}
