import React from 'react'

export const Notifications = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <h2> Notification</h2>
                        <p className="mb-4"> Create toggleable notifications that fade out automatically</p>
                        <p id="noti-intro">The notification will not fade out but remain visible when you
                            hover
                            the message until you stop hovering. You can also close the notification by clicking
                            it.</p>
                        <div className="uk-margin-medium">
                            <pre><code className="lang-js hljs javascript">UIkit.notification({"{"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">message</span>: <span className="hljs-string">'my-message!'</span>,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">status</span>: <span className="hljs-string">'primary'</span>,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">pos</span>: <span className="hljs-string">'top-right'</span>,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">timeout</span>: <span className="hljs-number">5000</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"}"});{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">// Shortcuts</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}UIkit.notification(<span className="hljs-string">'My message'</span>);{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}UIkit.notification(<span className="hljs-string">'My message'</span>, status);{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}UIkit.notification(<span className="hljs-string">'My message'</span>, {"{"} <span className="hljs-comment">/* options */</span> {"}"});</code></pre>
                        </div>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Message with an icon'})"> Click me </button>
                        <h3 className="uk-margin-medium-top" id="HTML-message"> HTML message </h3>
                        <p> You can use HTML inside your notification message, like
                            an icon
                            from the Icon component. </p>
                        <div className="uk-margin-medium">
                            <pre><code className="lang-js hljs javascript">UIkit.notification(<span className="hljs-string">"&lt;span uk-icon='icon: check'&gt;&lt;/span&gt; Message"</span>);</code></pre>
                        </div>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Message with an icon'})">With
                            icon</button>
                        <h3 className="uk-margin-medium-top" id="HTML-message-with-image">HTML message with image </h3>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<div class=\'uk-text-small uk-grid-small\' uk-grid><div class=\'uk-width-auto\'><img src=https://placehold.it/300x300' class=\'uk-avatar\'></div><div class=\'uk-width-expand\'><h5 class=\'uk-margin-remove-adjacent uk-margin-small-bottom\'> Hey there </h5><p> Hey there I-am Mandy, the notification master. You clicked ...  </p></div></div>'})"> Click me </button>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<div class=\'uk-text-small uk-grid-small bg-gradient-primary uk-light round shadow-primary uk-padding-small\' style=\'margin: -15px ; padding-left:0px \' uk-grid><div class=\'uk-width-auto\'><img src=https://placehold.it/150x150' class=\'uk-avatar\'></div><div class=\'uk-width-expand\'><h5 class=\'uk-margin-remove-adjacent uk-margin-small-bottom\'> Hey there </h5><p> Hey there I-am Mandy, the notification master. You clicked ...  </p></div></div>', pos: 'bottom-right'})"> Click me </button>
                        <h3 className="uk-margin-medium-top" id="noti-position">Position </h3>
                        <p>Add one of the following parameters to adjust the
                            notification's
                            position to different corners. </p>
                        <div className="uk-overflow-auto">
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th align="left">Position</th>
                                        <th align="left">Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left"><code>top-left</code></td>
                                        <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                            'top-left'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>top-center</code></td>
                                        <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                            'top-center'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>top-right</code></td>
                                        <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                            'top-right'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>bottom-left</code></td>
                                        <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                            'bottom-left'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>bottom-center</code></td>
                                        <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                            'bottom-center'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>bottom-right</code></td>
                                        <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                            'bottom-right'{'}'})</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p uk-margin>
                            <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Left...', pos: 'top-left'})">Top
                                Left</button>
                            <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Center...', pos: 'top-center'})">Top
                                Center</button>
                            <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Right...', pos: 'top-right'})">Top
                                Right</button>
                            <br />
                            <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Left...', pos: 'bottom-left'})">Bottom
                                Left</button>
                            <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Center...', pos: 'bottom-center'})">Bottom
                                Center</button>
                            <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Right...', pos: 'bottom-right'})">Bottom
                                Right</button>
                        </p>
                        <h3 className="uk-margin-medium-top" id="style">style </h3>
                        <p> A notification can be styled by adding a status to the
                            message to
                            indicate a primary, success, primary or a danger status. </p>
                        <div className="uk-overflow-auto uk-margin-medium-bottom">
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th align="left">Style</th>
                                        <th align="left">Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left"><code>primary</code></td>
                                        <td align="left"><code>UIkit.notification("...",
                                            {'{'}status:'primary'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>success</code></td>
                                        <td align="left"><code>UIkit.notification("...",
                                            {'{'}status:'success'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>primary</code></td>
                                        <td align="left"><code>UIkit.notification("...",
                                            {'{'}status:'primary'{'}'})</code></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><code>danger</code></td>
                                        <td align="left"><code>UIkit.notification("...",
                                            {'{'}status:'danger'{'}'})</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p uk-margin>
                            <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Primary message...', status: 'primary'})">Primary</button>
                            <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Success message...', status: 'success'})">Success</button>
                            <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'primary message...', status: 'primary'})">primary</button>
                            <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Danger message...', status: 'danger'})">Danger</button>
                        </p>
                        <h3 className="uk-margin-medium-top" id="Close-all"> Close all </h3>
                        <p>You can close all open notifications by calling <code>UIkit.notification.closeAll()</code>.</p>
                        <button className="button uk-button-default close" onclick="UIkit.notification.closeAll()">Close
                            All</button>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> <Link to="#noti-intro" uk-scroll> Introduction </Link></li>
                            <li> <Link to="#HTML-message" uk-scroll> HTML message </Link></li>
                            <li> <Link to="#HTML-message-with-image" uk-scroll> Message with image </Link></li>
                            <li> <Link to="#noti-position" uk-scroll> Position </Link></li>
                            <li> <Link to="#style" uk-scroll> style </Link></li>
                            <li> <Link to="#Close-all" uk-scroll> Close-all </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}
