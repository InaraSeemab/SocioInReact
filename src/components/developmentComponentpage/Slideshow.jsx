import React from 'react'

const Slideshow = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Slideshow </h2>
                        <p className="mb-4"> Create a responsive slideshow with images and videos.</p>
                        <p id="slide-show-basic">To apply this component, add the <code>uk-slideshow</code> attribute to a container element and create a list of slides with the <code>.uk-slideshow-items</code> class. <br />
                            Add an image in the background of each slide using the <code>uk-cover</code> attribute
                            from the <Link to="https://wpkixx.com/html/socimo/cover.html">Cover component</Link> </p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow>
                            <ul className="uk-slideshow-items">
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                            </ul>
                            <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #slideshow"> MARKUP</button>
                            <div id="slideshow" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre><code id="code-jw0g3ybl" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="el-title" id="slide-animate"> Animations</h3>
                        <p> By default, the slideshow uses a <code>slide</code> animation. You can set the <code>animation</code> option to use a different
                            animation.
                            Possible values are as follows: </p>
                        <div className="uk-overflow-auto uk-width-2-3@m mb-4">
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th align="left">Animation</th>
                                        <th align="left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left"><code>slide</code></td>
                                        <td align="left">Slides slide in side by side.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>fade</code></td>
                                        <td align="left">Slides fade in.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>scale</code></td>
                                        <td align="left">Slides are scaled up and fade out.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>pull</code></td>
                                        <td align="left">Slides are pulled from the deck.</td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>push</code></td>
                                        <td align="left">Slides are pushed to the deck.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="uk-child-width-1-2@m" uk-grid>
                            <div>
                                <div className="uk-h5">Slide</div>
                                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow>
                                    <ul className="uk-slideshow-items">
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                                    </ul>
                                    <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            </div>
                            <div>
                                <div className="uk-h5">Fade</div>
                                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: fade">
                                    <ul className="uk-slideshow-items">
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                                    </ul>
                                    <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            </div>
                            <div>
                                <div className="uk-h5">Scale</div>
                                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: scale">
                                    <ul className="uk-slideshow-items">
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                                    </ul>
                                    <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            </div>
                            <div>
                                <div className="uk-h5">Pull</div>
                                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: pull">
                                    <ul className="uk-slideshow-items">
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                                    </ul>
                                    <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            </div>
                            <div>
                                <div className="uk-h5">Push</div>
                                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: push">
                                    <ul className="uk-slideshow-items">
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                        <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                                    </ul>
                                    <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            </div>
                        </div>
                        <h3 className="el-title" id="Autoplay"> Autoplay</h3>
                        <p> To activate autoplay, just add the <code>autoplay:
                            true</code> option to the attribute. You can also set the interval in
                            milliseconds
                            between switching slides using <code>autoplay-interval: 6000</code>. To pause
                            autoplay
                            when hovering the slideshow, use <code>pause-on-hover: true</code> </p>
                        <pre className="bg-soft-primary"><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"autoplay: true"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <h3 className="el-title" id="slideshow-nav"> Navigation</h3>
                        <p>To navigate through your slides, just use the <code>uk-slideshow-item</code> attribute. To target the slides, set the attribute of
                            every nav item to the index number of the respective slideshow item. The elements
                            with
                            the <code>uk-slideshow-item</code> attribute need to be inside the <code>uk-slideshow</code> container. Setting the attribute to <code>next</code> and <code>previous</code> will switch to the adjacent slides. </p>
                        <div uk-slideshow="animation: push">
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1}>
                                <ul className="uk-slideshow-items">
                                    <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                    <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                                    <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                </ul>
                                <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin">
                            </ul>
                        </div>
                        <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Navigations"> MARKUP</button>
                            <div id="Navigations" aria-hidden="true" className="uk-margin-small-top" hidden>
                                <pre>
                                    <code>
                                        {`<div uk-slideshow="animation: push">

                                                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                                                    <ul class="uk-slideshow-items">
                                                        <li>
                                                            <img src="images/photo.jpg" alt="" uk-cover>
                                                        </li>
                                                        <li>
                                                            <img src="images/dark.jpg" alt="" uk-cover>
                                                        </li>
                                                        <li>
                                                            <img src="images/light.jpg" alt="" uk-cover>
                                                        </li>
                                                    </ul>

                                                    <a class="uk-position-center-left uk-position-small uk-hidden-hover"
                                                      href="#"
                                                      uk-slidenav-previous
                                                      uk-slideshow-item="previous"></a>

                                                    <a class="uk-position-center-right uk-position-small uk-hidden-hover"
                                                      href="#"
                                                      uk-slidenav-next
                                                      uk-slideshow-item="next"></a>

                                                </div>

                                                <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

                                            </div>`}
                                    </code>
                                </pre>
                            </div>
                            <br />
                            <p><span className="uk-label">Note</span> For better visibility of overlaying navigations,
                                add the <code>.uk-light</code> or <code>.uk-dark</code> class from the <Link to="https://wpkixx.com/html/socimo/inverse.html">Inverse
                                    component</Link>.</p>
                            <h3 className="el-title" id="slideshow-effect"> Ken Burns effect </h3>
                            <p>To add a simple Ken Burns effect, wrap the image with a <code>div</code> and add the <code>.uk-position-cover</code> and <code>.uk-animation-kenburns</code> classes. You can also apply the <code>.uk-animation-reverse</code> or one of the <code>.uk-transform-origin-*</code> classes from the <Link to="https://wpkixx.com/html/socimo/utility.html#transform-origin">Utility component</Link> to modify
                                the
                                effect. </p>
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: push">
                                <ul className="uk-slideshow-items">
                                    <li>
                                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </div>
                                    </li>
                                    <li>
                                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </div>
                                    </li>
                                    <li>
                                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </div>
                                    </li>
                                </ul>
                                <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                            <div>
                                <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #effect"> MARKUP</button>
                                <div id="effect" aria-hidden="true" className="uk-margin-small-top" hidden>
                                    <pre>
                                        <code id="code-jw0g3ybs" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"animation: push"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" />
                                        </code>
                                    </pre>
                                </div>
                                <div>
                                    <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #effect"> MARKUP</button>
                                    <div id="effect" aria-hidden="true" className="uk-margin-small-top" hidden>
                                        <pre><code id="code-jw0g3ybs" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"animation: push"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}
                                        </code>
                                        </pre>
                                    </div>
                                    <h3 className="el-title" id="slideshow-parallax"> Content parallax</h3>
                                    <p> Add the <code>uk-slideshow-parallax</code> attribute to any
                                        element inside the slides to animate it together with the slideshow animation. Add
                                        an
                                        option with the desired animation values for each CSS property you want to animate.
                                        Define at least one start and end value. It can be done by passing two values
                                        separated
                                        by a comma. <br />
                                        The parallax attribute can be used to add additional effects to the slideshow
                                        animations. In the following example the <code>push</code> animation is extended by
                                        dimming out and scaling down the image when it's sliding out. </p>
                                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: push">
                                        <ul className="uk-slideshow-items">
                                            <li>
                                                <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </div>
                                                <div className="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"> </div>
                                                <div className="uk-position-center uk-position-medium uk-text-center">
                                                    <div uk-slideshow-parallax="scale: 1,1,0.8">
                                                        <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                                                        <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </div>
                                                <div className="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"> </div>
                                                <div className="uk-position-center uk-position-medium uk-text-center">
                                                    <div uk-slideshow-parallax="scale: 1,1,0.8">
                                                        <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                                                        <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </div>
                                                <div className="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"> </div>
                                                <div className="uk-position-center uk-position-medium uk-text-center">
                                                    <div uk-slideshow-parallax="scale: 1,1,0.8">
                                                        <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                                                        <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet. </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous uk-slideshow-item="previous" /> <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                                    <div>
                                        <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #parallax"> MARKUP</button>
                                        <div id="parallax" aria-hidden="true" className="uk-margin-small-top" hidden>
                                            <pre><code id="code-jw0g3ybu" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"animation: push"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-position-small uk-text-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 100,-100"</span>&gt;</span>Heading<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 200,-200"</span>&gt;</span>Lorem ipsum dolor sit amet.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-position-small uk-text-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 100,-100"</span>&gt;</span>Heading<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 200,-200"</span>&gt;</span>Lorem ipsum dolor sit amet.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-position-small uk-text-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"y: -50,0,0; opacity: 1,1,0"</span>&gt;</span>Heading<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">  </span>
                                            </span>
                                            </code>
                                            </pre>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-4@s uk-visible@s">
                                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                                            <li> <Link to="#slide-show-basic" uk-scroll> Basic </Link></li>
                                            <li> <Link to="#slide-animate" uk-scroll> Animations </Link></li>
                                            <li> <Link to="#Autoplay" uk-scroll> Autoplay </Link></li>
                                            <li> <Link to="#slideshow-nav" uk-scroll> Navigation </Link></li>
                                            <li> <Link to="#slideshow-effect" uk-scroll> Ken Burns effect </Link></li>
                                            <li> <Link to="#slideshow-parallax" uk-scroll> Content parallax </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Slideshow