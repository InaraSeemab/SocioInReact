import React from 'react'
import { Link } from 'react-router-dom'
export const Progress = () => {
    return (
        <>
            <li>
                <div className="mt-4 uk-grid-large" uk-grid>
                    <div className="uk-width-3-4@s">
                        <div className="tm-main uk-width-medium-3-4">
                            <article className="uk-article">
                                <h2 className="uk-article-title">Progress bars</h2>
                                <p className="uk-article-lead">Defines different styles for progress bars.</p>
                                <h2 id="prog-basic"><Link to="#usage" className="uk-link-reset">Usage</Link></h2>
                                <p>The progress bar consists of a background bar and the progress bar itself, indicating the increase.</p>
                                <div className="uk-overflow-container">
                                    <table className="uk-table uk-text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Class</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>.uk-progress</code></td>
                                                <td>This class is used on the parent container to create the background of the progress bar.</td>
                                            </tr>
                                            <tr>
                                                <td><code>.uk-progress-bar</code></td>
                                                <td>This class needs to be added to the child element to create the actual progress bar.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h3 className="tm-article-subtitle">Example</h3>
                                <div className="uk-progress">
                                    <div className="uk-progress-bar" style={{ width: '40%' }}>40%</div>
                                </div>
                                <h3 className="tm-article-subtitle">Markup</h3>
                                <pre><code>&lt;div class="uk-progress"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress-bar" style="width: 40%;"&gt;40%&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;</code></pre>
                                <hr className="uk-article-divider" />
                                <h2 id="size-mod"><Link to="#size-modifiers" className="uk-link-reset">Size modifiers</Link></h2>
                                <p>Add the <code>.uk-progress-mini</code> or <code>.uk-progress-small</code> class to change the size of the bar.</p>
                                <h3 className="tm-article-subtitle">Example</h3>
                                <div className="uk-progress uk-progress-mini">
                                    <div className="uk-progress-bar" style={{ width: '50%' }} />
                                </div>
                                <div className="uk-progress uk-progress-small">
                                    <div className="uk-progress-bar" style={{ width: '55%' }} />
                                </div>
                                <div className="uk-progress">
                                    <div className="uk-progress-bar" style={{ width: '60%' }} />
                                </div>
                                <h3 className="tm-article-subtitle">Markup</h3>
                                <pre><code>&lt;div class="uk-progress uk-progress-mini"&gt;...&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress uk-progress-small"&gt;...&lt;/div&gt;</code></pre>
                                <hr className="uk-article-divider" />
                                <h2 id="color-mod"><Link to="#color-modifiers" className="uk-link-reset">Color modifiers</Link></h2>
                                <p>To apply different colors to your progress bars, just add the <code>.uk-progress-success</code>, <code>.uk-progress-warning</code> or <code>.uk-progress-danger</code> class.</p>
                                <h4 className="tm-article-subtitle">Example</h4>
                                <div className="uk-progress uk-progress-success">
                                    <div className="uk-progress-bar" style={{ width: '75%' }} />
                                </div>
                                <div className="uk-progress uk-progress-warning">
                                    <div className="uk-progress-bar" style={{ width: '55%' }} />
                                </div>
                                <div className="uk-progress uk-progress-danger">
                                    <div className="uk-progress-bar" style={{ width: '35%' }} />
                                </div>
                                <h3 className="tm-article-subtitle">Markup</h3>
                                <pre><code>&lt;div class="uk-progress uk-progress-success"&gt;...&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress uk-progress-warning"&gt;...&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress uk-progress-danger"&gt;...&lt;/div&gt;</code></pre>
                                <hr className="uk-article-divider" />
                                <h3>Striped</h3>
                                <p>To create a striped progress bar, use the <code>.uk-progress-striped</code> class.</p>
                                <h4 className="tm-article-subtitle">Example</h4>
                                <div className="uk-progress uk-progress-striped">
                                    <div className="uk-progress-bar" style={{ width: '65%' }} />
                                </div>
                                <h3 className="tm-article-subtitle">Markup</h3>
                                <pre><code>&lt;div class="uk-progress uk-progress-striped"&gt;...&lt;/div&gt;</code></pre>
                                <p>You can even animate the striped bar. To do so, just add the <code>.uk-active</code> class.</p>
                                <h4 className="tm-article-subtitle">Example</h4>
                                <div className="uk-progress uk-progress-striped uk-active">
                                    <div className="uk-progress-bar" style={{ width: '85%' }} />
                                </div>
                                <h3 className="tm-article-subtitle">Markup</h3>
                                <pre><code>&lt;div class="uk-progress uk-progress-striped uk-active"&gt;...&lt;/div&gt;</code></pre>
                                <hr className="uk-article-divider" />
                                <h3>Combinable</h3>
                                <p>All modifiers of the Progress component can be combined with each other.</p>
                                <h4 className="tm-article-subtitle">Example</h4>
                                <div className="uk-progress uk-progress-small uk-progress-danger uk-progress-striped uk-active">
                                    <div className="uk-progress-bar" style={{ width: '55%' }} />
                                </div>
                                <h3 className="tm-article-subtitle">Markup</h3>
                                <pre><code>&lt;div class="uk-progress uk-progress-small uk-progress-danger uk-progress-striped uk-active"&gt;...&lt;/div&gt;</code></pre>
                            </article>
                        </div>
                    </div>
                    <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                            <li> <Link to="#prog-basic" uk-scroll> Usage </Link></li>
                            <li> <Link to="#size-mod" uk-scroll> Size Modifier </Link></li>
                            <li> <Link to="#color-mod" uk-scroll> color-modifier </Link></li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}
