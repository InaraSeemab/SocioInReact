import React from 'react'

const Accordion = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Accordion</h2>
                        <p className="mb-4">Create a list of items that can be shown individually by clicking an
                            item's header. </p>
                        <h6 id="Introduction"> Usage</h6>
                        <p>The Accordion component consists of a parent container with the <code>uk-accordion</code> attribute, and a title and content part for each accordion item.</p>
                        <h6>PREVIEW</h6>
                        <ul uk-accordion>
                            <li className="uk-open"> <Link to="#" className="uk-accordion-title">Item 1</Link>
                                <div className="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li> <Link to="#" className="uk-accordion-title">Item 2</Link>
                                <div className="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit. </p>
                                </div>
                            </li>
                            <li> <Link to="#" className="uk-accordion-title">Item 3</Link>
                                <div className="uk-accordion-content">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <button className="button Markup-botton" uk-toggle="target: #Accordion"> MARKUP</button>
                            <div id="Accordion" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre><code id="code-k0ov83w7" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">uk-accordion</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-open"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Multiple-open-items"> Multiple open items </h3>
                        <p>To display multiple content sections at the same time without one collapsing when the
                            other
                            one is opened, add the <code>multiple: true</code> option to the <code>uk-accordion</code> attribute.</p>
                        <h6> PREVIEW</h6>
                        <ul uk-accordion="multiple: true">
                            <li className="uk-open"> <Link to="#" className="uk-accordion-title">Item 1</Link>
                                <div className="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li> <Link to="#" className="uk-accordion-title">Item 2</Link>
                                <div className="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit. </p>
                                </div>
                            </li>
                            <li> <Link to="#" className="uk-accordion-title">Item 3</Link>
                                <div className="uk-accordion-content">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <button className="button Markup-botton  uk-margin-small-top" type="button" uk-toggle="target: #Accordion-Multiple"> MARKUP</button>
                            <div id="Accordion-Multiple" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre><code id="code-k0ov83w8" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">uk-accordion</span>=<span className="hljs-string">"collapsible: false"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                            </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Advance"> Advance Multiple open </h3>
                        <h6> PREVIEW</h6>
                        <article className="uk-card-default p-4 rounded">
                            <ul className="uk-list-divider uk-list-large uk-accordion" uk-accordion>
                                <li> <Link to="#" className="uk-accordion-title">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit?</Link>
                                    <div className="uk-accordion-content">
                                        <p>Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet,
                                            condimentum
                                            eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas
                                            vehicula
                                            fermentum id diam. In sodales quam quis mi mollis eleifend id sit
                                            amet
                                            velit.
                                            Sed ultricies condimentum magna, vel commodo dolor luctus in.
                                            Aliquam et
                                            orci
                                            nibh. Nunc purus metus, aliquam vitae venenatis sit amet, porta non
                                            est.
                                            Proin
                                            vehicula nisi eu molestie varius. Pellentesque semper ex diam, at
                                            tristique
                                            ipsum varius sed. Pellentesque non metus ullamcorper, iaculis nibh
                                            quis,
                                            facilisis lorem. Sed malesuada eu lacus sit amet feugiat. Aenean
                                            iaculis dui
                                            sed
                                            quam consectetur elementum.</p>
                                    </div>
                                </li>
                                <li> <Link to="#" className="uk-accordion-title">Nullam massa sem, mollis ut luctus
                                    at,
                                    tincidunt
                                    a lorem?</Link>
                                    <div className="uk-accordion-content" hidden aria-hidden="true">
                                        <p>Aliquam sed dictum elit, quis consequat metus. Proin in mauris
                                            finibus urna
                                            lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet
                                            enim
                                            rutrum,
                                            vel eleifend metus consectetur. Sed lacinia urna a neque maximus
                                            placerat.
                                            Praesent blandit hendrerit dui non placerat. Sed malesuada sem sit
                                            amet arcu
                                            faucibus, sit amet accumsan nisl laoreet. Quisque auctor sit amet
                                            nisl
                                            rhoncus
                                            interdum. Nullam euismod odio sem, quis pulvinar purus gravida eget.
                                            Nullam
                                            molestie, lacus vel vehicula elementum, massa arcu bibendum lacus,
                                            vitae
                                            tempus
                                            justo orci id lectus. Duis justo neque, elementum eget ante in,
                                            condimentum
                                            condimentum ante. Maecenas quis eleifend risus. In hac habitasse
                                            platea
                                            dictumst. Nunc posuere ultrices dolor, at auctor lacus dignissim ut.
                                            Donec viverra imperdiet nisi, sit amet mattis massa pellentesque ac.</p>
                                    </div>
                                </li>
                                <li> <Link to="#" className="uk-accordion-title">Aliquam pretium diam et ullamcorper
                                    malesuada?</Link>
                                    <div className="uk-accordion-content" hidden aria-hidden="true">
                                        <p>Praesent feugiat lectus faucibus tellus congue pharetra. In viverra
                                            vehicula
                                            pellentesque. Etiam consectetur ultricies magna at bibendum. Sed
                                            posuere
                                            libero
                                            ut nulla ornare, faucibus pellentesque odio pulvinar. Vestibulum
                                            feugiat ex
                                            id
                                            ex elementum egestas. Integer laoreet mollis risus, id efficitur
                                            neque.
                                            Pellentesque quis dolor faucibus, ultrices tellus id, vestibulum
                                            neque. Sed
                                            eros
                                            purus, dignissim id fermentum ut, lacinia laoreet odio. Sed mi erat,
                                            aliquet
                                            at
                                            facilisis quis, laoreet in massa. Pellentesque eu massa accumsan,
                                            iaculis
                                            erat
                                            eu, tincidunt sem. Quisque id orci id dui congue pretium.
                                            Pellentesque iaculis,
                                            dolor aliquet tempor laoreet, enim metus tincidunt massa, ut porttitor sem dui
                                            sit amet arcu. Vestibulum sodales laoreet enim, sit amet vestibulum
                                            nisl
                                            porttitor a.</p>
                                    </div>
                                </li>
                                <li> <Link to="#" className="uk-accordion-title">Etiam suscipit at nisi eget
                                    auctor?</Link>
                                    <div className="uk-accordion-content" hidden aria-hidden="true">
                                        <p>Mauris id pellentesque metus. In quis arcu sed enim maximus
                                            pellentesque et
                                            eget
                                            velit. Etiam euismod enim vitae condimentum tristique.</p>
                                    </div>
                                </li>
                                <li> <Link to="#" className="uk-accordion-title">Sed porta diam eget enim bibendum
                                    laoreet?</Link>
                                    <div className="uk-accordion-content" hidden aria-hidden="true">
                                        <p>Donec molestie sem et tellus vestibulum venenatis. Quisque iaculis
                                            ornare
                                            luctus.
                                            Orci varius natoque penatibus et magnis dis parturient montes,
                                            nascetur
                                            ridiculus mus. Morbi velit nibh, ullamcorper eu imperdiet id, rutrum
                                            quis
                                            mi.
                                            Donec eu aliquet lorem. Nulla at lectus turpis. Sed et diam ac lorem
                                            iaculis
                                            lacinia.</p>
                                    </div>
                                </li>
                            </ul>
                        </article>
                        <div>
                            <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #Accordion-Multiple-advance"> MARKUP</button>
                            <div id="Accordion-Multiple-advance" aria-hidden="true" className=" uk-margin-small-top" hidden>
                                <pre><code id="code-k0ovw8xb" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">article</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-default p-4 rounded"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list-divider uk-list-large uk-accordion"</span> <span className="hljs-attr">uk-accordion</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}adipiscing elit?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}condimentum{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas vehicula{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}fermentum id diam. In sodales quam quis mi mollis eleifend id sit amet{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}velit.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Sed ultricies condimentum magna, vel commodo dolor luctus in. Aliquam et{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}orci{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}nibh. Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Proin{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}vehicula nisi eu molestie varius. Pellentesque semper ex diam, at tristique{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ipsum varius sed. Pellentesque non metus ullamcorper, iaculis nibh quis,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}facilisis lorem. Sed malesuada eu lacus sit amet feugiat. Aenean iaculis dui{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}sed{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}quam consectetur elementum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Nullam massa sem, mollis ut luctus at,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}tincidunt{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}a lorem?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Aliquam sed dictum elit, quis consequat metus. Proin in mauris finibus urna{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet enim{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}rutrum,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}vel eleifend metus consectetur. Sed lacinia urna a neque maximus placerat.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Praesent blandit hendrerit dui non placerat. Sed malesuada sem sit amet arcu{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}faucibus, sit amet accumsan nisl laoreet. Quisque auctor sit amet nisl{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}rhoncus{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}interdum. Nullam euismod odio sem, quis pulvinar purus gravida eget. Nullam{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}molestie, lacus vel vehicula elementum, massa arcu bibendum lacus, vitae{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}tempus{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}justo orci id lectus. Duis justo neque, elementum eget ante in, condimentum{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}condimentum ante. Maecenas quis eleifend risus. In hac habitasse platea{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}dictumst. Nunc posuere ultrices dolor, at auctor lacus dignissim ut. Donec{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}viverra imperdiet nisi, sit amet mattis massa pellentesque ac.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Aliquam pretium diam et ullamcorper{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}malesuada?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Praesent feugiat lectus faucibus tellus congue pharetra. In viverra vehicula{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}pellentesque. Etiam consectetur ultricies magna at bibendum. Sed posuere{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}libero{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ut nulla ornare, faucibus pellentesque odio pulvinar. Vestibulum feugiat ex{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}id{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ex elementum egestas. Integer laoreet mollis risus, id efficitur neque.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Pellentesque quis dolor faucibus, ultrices tellus id, vestibulum neque. Sed{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eros{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}purus, dignissim id fermentum ut, lacinia laoreet odio. Sed mi erat, aliquet{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}at{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}facilisis quis, laoreet in massa. Pellentesque eu massa accumsan, iaculis{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}erat{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eu, tincidunt sem. Quisque id orci id dui congue pretium. Pellentesque{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}iaculis,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}dolor aliquet tempor laoreet, enim metus tincidunt massa, ut porttitor sem{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}dui{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}sit amet arcu. Vestibulum sodales laoreet enim, sit amet vestibulum nisl{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}porttitor a.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Etiam suscipit at nisi eget auctor?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Mauris id pellentesque metus. In quis arcu sed enim maximus pellentesque et{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eget{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}velit. Etiam euismod enim vitae condimentum tristique.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Sed porta diam eget enim bibendum{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}laoreet?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Donec molestie sem et tellus vestibulum venenatis. Quisque iaculis ornare{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}luctus.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Orci varius natoque penatibus et magnis dis parturient montes, nascetur{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ridiculus mus. Morbi velit nibh, ullamcorper eu imperdiet id, rutrum quis{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}mi.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Donec eu aliquet lorem. Nulla at lectus turpis. Sed et diam ac lorem iaculis{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}lacinia.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">article</span>&gt;</span></code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m">
                            <li> <Link to="#Introduction" uk-scroll> Introduction </Link></li>
                            <li> <Link to="#Multiple-open-items" uk-scroll> Multiple open items </Link></li>
                            <li> <Link to="#Advance" uk-scroll> Advance </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Accordion