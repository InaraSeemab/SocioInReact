import React from 'react'

const Tooltip = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Tooltip</h2>
                        <p className="mb-4" id="bg"> Easily create a nice looking tooltip. </p>
                        <p> To apply this component, add the <code>uk-tooltip</code> attribute to an element. You also need to add the <code>title: TEXT</code> option to
                            the
                            attribute, whose value will represent your tooltip's text </p>
                        <div className="uk-margin-medium">
                            <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        </div>
                        <div uk-margin>
                            <button className="button uk-button-default" uk-tooltip="Hello World">Hover</button>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Alignment"> MARKUP</button>
                            <div id="Alignment" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jyd3npuh" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"Hello World"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="el-title" id="tooltip-alignment"> Alignment</h3>
                        <p> Add one of the following options to the <code> uk-tooltip </code> attribute to adjust the tooltip's alignment. </p>
                        <div className="uk-overflow-auto uk-margin-large">
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th align="left">Attribute</th>
                                        <th align="left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left"><code>pos: top</code></td>
                                        <td align="left">Aligns the tooltip to the top.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: top-left</code></td>
                                        <td align="left">Aligns the tooltip to the top left.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: top-right</code></td>
                                        <td align="left">Aligns the tooltip to the top right.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: bottom</code></td>
                                        <td align="left">Aligns the tooltip to the bottom.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: bottom-left</code></td>
                                        <td align="left">Aligns the tooltip to the bottom left.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: bottom-right</code></td>
                                        <td align="left">Aligns the tooltip to the bottom right.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: left</code></td>
                                        <td align="left">Aligns the tooltip to the left.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pos: right</code></td>
                                        <td align="left">Aligns the tooltip to the right.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p uk-margin>
                            <button className="button uk-button-default" uk-tooltip="Hello World">Top</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: top-left">Top
                                Left</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: top-right">Top
                                Right</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: bottom">Bottom</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: bottom-left">Bottom
                                Left</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: bottom-right">Bottom
                                Right</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: left">Left</button>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: right">Right</button>
                        </p>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Alignmentz"> MARKUP</button>
                            <div id="Alignmentz" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jyd3npui" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"Hello World"</span>&gt;</span>Top<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: top-left"</span>&gt;</span>Top Left<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: top-right"</span>&gt;</span>Top Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: bottom"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: bottom-left"</span>&gt;</span>Bottom Left<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: bottom-right"</span>&gt;</span>Bottom Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: left"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: right"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="el-title" id="Delay"> Delay</h3>
                        <p> To apply this component, add the <code>uk-tooltip</code> attribute to an element. You also need to add the <code>title: TEXT</code> option to
                            the
                            attribute, whose value will represent your tooltip's text </p>
                        <div uk-margin>
                            <button className="button uk-button-default" uk-tooltip="title: Hello World; delay: 500">Hover</button>
                        </div>
                        <pre><code id="code-jyd3npuj" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; delay: 500"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></code></pre>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> <Link to="#bg" uk-scroll> backgrounds </Link></li>
                            <li> <Link to="#tooltip-alignment" uk-scroll> Alignment </Link></li>
                            <li> <Link to="#Delay" uk-scroll> Delay </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Tooltip