




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>moment-range/lib/moment-range.bare.js at master · gf3/moment-range · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="gf3/moment-range" name="twitter:title" /><meta content="moment-range - Fancy date ranges for Moment.js" name="twitter:description" /><meta content="https://2.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?d=https%3A%2F%2Fidenticons.github.com%2Fe41ca9097b60bdb7c752d6d8867781a8.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?d=https%3A%2F%2Fidenticons.github.com%2Fe41ca9097b60bdb7c752d6d8867781a8.png&amp;r=x&amp;s=400" property="og:image" /><meta content="gf3/moment-range" property="og:title" /><meta content="https://github.com/gf3/moment-range" property="og:url" /><meta content="moment-range - Fancy date ranges for Moment.js" property="og:description" />

    <meta name="hostname" content="github-fe136-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="60314DFE:3CFB:2014E71:531908FB" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="8UCQnoEQgiBGrY2uhE805DQ8qKHgnI7zKNGodSh+G2c=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-43d626fef04a3baef80b489c63b83e042878f9a1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-03540686be8a1f48869a5a0ab85fe008afdbef11.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-871d634893ce516b04e248598f5e07f9a15e7a3b.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-923cf13b0593f8c2b97c8a50d5df2f8bbb0c12f8.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="7f4be785355f5f749b3f0e7f998f22af">

        <link data-pjax-transient rel='permalink' href='/gf3/moment-range/blob/e174ef18c7133c3d31d42fda7e6d2224e030d42d/lib/moment-range.bare.js'>

  <meta name="description" content="moment-range - Fancy date ranges for Moment.js" />

  <meta content="18397" name="octolytics-dimension-user_id" /><meta content="gf3" name="octolytics-dimension-user_login" /><meta content="4421554" name="octolytics-dimension-repository_id" /><meta content="gf3/moment-range" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4421554" name="octolytics-dimension-repository_network_root_id" /><meta content="gf3/moment-range" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/gf3/moment-range/commits/master.atom" rel="alternate" title="Recent Commits to moment-range:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fgf3%2Fmoment-range%2Fblob%2Fmaster%2Flib%2Fmoment-range.bare.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="gf3/moment-range"
      data-branch="master"
      data-sha="1dc25ec2bd488177179fadcfcc9d45eab49b8815"
  >

    <input type="hidden" name="nwo" value="gf3/moment-range" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fgf3%2Fmoment-range"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/gf3/moment-range/stargazers">
      115
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fgf3%2Fmoment-range"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/gf3/moment-range/network" class="social-count">
        29
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/gf3" class="url fn" itemprop="url" rel="author"><span itemprop="title">gf3</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/gf3/moment-range" class="js-current-repository js-repo-home-link">moment-range</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/gf3/moment-range" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /gf3/moment-range">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/gf3/moment-range/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /gf3/moment-range/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>3</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/gf3/moment-range/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /gf3/moment-range/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/gf3/moment-range/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /gf3/moment-range/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/gf3/moment-range/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /gf3/moment-range/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/gf3/moment-range/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /gf3/moment-range/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/gf3/moment-range.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/gf3/moment-range.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/gf3/moment-range" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/gf3/moment-range" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/gf3/moment-range/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:3bfd4cc7d310d210ab8482984f15f29c -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/gf3/moment-range/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/blob/gh-pages/lib/moment-range.bare.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/blob/master/lib/moment-range.bare.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v1.0.1/lib/moment-range.bare.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v1.0.0/lib/moment-range.bare.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.9/lib/moment-range.bare.js"
                 data-name="v0.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.9">v0.1.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.8/lib/moment-range.bare.js"
                 data-name="v0.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.8">v0.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.7/lib/moment-range.bare.js"
                 data-name="v0.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.7">v0.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.6/lib/moment-range.bare.js"
                 data-name="v0.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.6">v0.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.4/lib/moment-range.bare.js"
                 data-name="v0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.4">v0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.3/lib/moment-range.bare.js"
                 data-name="v0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.3">v0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/gf3/moment-range/tree/v0.1.2/lib/moment-range.bare.js"
                 data-name="v0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.2">v0.1.2</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gf3/moment-range" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">moment-range</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gf3/moment-range/tree/master/lib" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">moment-range.bare.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="lib/moment-range.bare.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Gianni Chiappetta" class="main-avatar js-avatar" data-user="18397" height="24" src="https://2.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?d=https%3A%2F%2Fidenticons.github.com%2Fe41ca9097b60bdb7c752d6d8867781a8.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/gf3" rel="author">gf3</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-26T10:20:44-08:00" title="2014-02-26 10:20:44">February 26, 2014</time>
    <div class="commit-title">
        <a href="/gf3/moment-range/commit/e174ef18c7133c3d31d42fda7e6d2224e030d42d" class="message" data-pjax="true" title="Version bump to 1.0.1">Version bump to 1.0.1</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="gf3" href="/gf3/moment-range/commits/master/lib/moment-range.bare.js?author=gf3"><img alt="Gianni Chiappetta" class=" js-avatar" data-user="18397" height="20" src="https://2.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?d=https%3A%2F%2Fidenticons.github.com%2Fe41ca9097b60bdb7c752d6d8867781a8.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="pronebel" href="/gf3/moment-range/commits/master/lib/moment-range.bare.js?author=pronebel"><img alt="nebel" class=" js-avatar" data-user="911730" height="20" src="https://1.gravatar.com/avatar/c53580e2db1d997defc45bb3c303b2d3?d=https%3A%2F%2Fidenticons.github.com%2F981545ccdaabf37f90821e4d12ac18bc.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="bradleyayers" href="/gf3/moment-range/commits/master/lib/moment-range.bare.js?author=bradleyayers"><img alt="Bradley Ayers" class=" js-avatar" data-user="105820" height="20" src="https://2.gravatar.com/avatar/9515ab087a2ca71270e6844366f6e689?d=https%3A%2F%2Fidenticons.github.com%2F3ed3287eb3a47bbf2e1d00ae3c45ec22.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Gianni Chiappetta" class=" js-avatar" data-user="18397" height="24" src="https://2.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?d=https%3A%2F%2Fidenticons.github.com%2Fe41ca9097b60bdb7c752d6d8867781a8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/gf3">gf3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="nebel" class=" js-avatar" data-user="911730" height="24" src="https://1.gravatar.com/avatar/c53580e2db1d997defc45bb3c303b2d3?d=https%3A%2F%2Fidenticons.github.com%2F981545ccdaabf37f90821e4d12ac18bc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/pronebel">pronebel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Bradley Ayers" class=" js-avatar" data-user="105820" height="24" src="https://2.gravatar.com/avatar/9515ab087a2ca71270e6844366f6e689?d=https%3A%2F%2Fidenticons.github.com%2F3ed3287eb3a47bbf2e1d00ae3c45ec22.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bradleyayers">bradleyayers</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>222 lines (180 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.856 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/gf3/moment-range/raw/master/lib/moment-range.bare.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/gf3/moment-range/blame/master/lib/moment-range.bare.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/gf3/moment-range/commits/master/lib/moment-range.bare.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm">  * DateRange class to store ranges and query dates.</span></div><div class='line' id='LC3'><span class="cm">  * @typedef {!Object}</span></div><div class='line' id='LC4'><span class="cm">*</span></div><div class='line' id='LC5'><span class="cm">*/</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="kd">var</span> <span class="nx">DateRange</span><span class="p">;</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="nx">DateRange</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC11'><span class="cm">    * DateRange instance.</span></div><div class='line' id='LC12'><span class="cm">    * @param {(Moment|Date)} start Start of interval.</span></div><div class='line' id='LC13'><span class="cm">    * @param {(Moment|Date)} end   End of interval.</span></div><div class='line' id='LC14'><span class="cm">    * @constructor</span></div><div class='line' id='LC15'><span class="cm">  *</span></div><div class='line' id='LC16'><span class="cm">  */</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">DateRange</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="nx">moment</span><span class="p">(</span><span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="nx">moment</span><span class="p">(</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC24'><span class="cm">    * Determine if the current interval contains a given moment/date/range.</span></div><div class='line' id='LC25'><span class="cm">    * @param {(Moment|Date|DateRange)} other Date to check.</span></div><div class='line' id='LC26'><span class="cm">    * @return {!boolean}</span></div><div class='line' id='LC27'><span class="cm">  *</span></div><div class='line' id='LC28'><span class="cm">  */</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">contains</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">other</span> <span class="k">instanceof</span> <span class="nx">DateRange</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">&gt;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">;</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;=</span> <span class="nx">other</span> <span class="o">&amp;&amp;</span> <span class="nx">other</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC40'><span class="cm">    * @private</span></div><div class='line' id='LC41'><span class="cm">  *</span></div><div class='line' id='LC42'><span class="cm">  */</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_by_string</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">interval</span><span class="p">,</span> <span class="nx">hollaback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">current</span><span class="p">,</span> <span class="nx">_results</span><span class="p">;</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current</span> <span class="o">=</span> <span class="nx">moment</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">current</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hollaback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">current</span><span class="p">.</span><span class="nx">clone</span><span class="p">());</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">current</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">interval</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_results</span><span class="p">;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC57'><span class="cm">    * @private</span></div><div class='line' id='LC58'><span class="cm">  *</span></div><div class='line' id='LC59'><span class="cm">  */</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_by_range</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">range_interval</span><span class="p">,</span> <span class="nx">hollaback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">l</span><span class="p">,</span> <span class="nx">_i</span><span class="p">,</span> <span class="nx">_results</span><span class="p">;</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">l</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">this</span> <span class="err">/ range_interval);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">l</span> <span class="o">===</span> <span class="kc">Infinity</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">_i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="mi">0</span> <span class="o">&lt;=</span> <span class="nx">l</span> <span class="o">?</span> <span class="nx">_i</span> <span class="o">&lt;=</span> <span class="nx">l</span> <span class="o">:</span> <span class="nx">_i</span> <span class="o">&gt;=</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span> <span class="o">&lt;=</span> <span class="nx">l</span> <span class="o">?</span> <span class="o">++</span><span class="nx">_i</span> <span class="o">:</span> <span class="o">--</span><span class="nx">_i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">hollaback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">moment</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">()</span> <span class="o">+</span> <span class="nx">range_interval</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">()</span> <span class="o">*</span> <span class="nx">i</span><span class="p">)));</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_results</span><span class="p">;</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC76'><span class="cm">    * Determine if the current date range overlaps a given date range.</span></div><div class='line' id='LC77'><span class="cm">    * @param {!DateRange} range Date range to check.</span></div><div class='line' id='LC78'><span class="cm">    * @return {!boolean}</span></div><div class='line' id='LC79'><span class="cm">  *</span></div><div class='line' id='LC80'><span class="cm">  */</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">overlaps</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">range</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">intersect</span><span class="p">(</span><span class="nx">range</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC88'><span class="cm">    * Determine the intersecting periods from one or more date ranges.</span></div><div class='line' id='LC89'><span class="cm">    * @param {!DateRange} other A date range to intersect with this one.</span></div><div class='line' id='LC90'><span class="cm">    * @return {!DateRange|null}</span></div><div class='line' id='LC91'><span class="cm">  *</span></div><div class='line' id='LC92'><span class="cm">  */</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">intersect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_ref</span><span class="p">,</span> <span class="nx">_ref1</span><span class="p">,</span> <span class="nx">_ref2</span><span class="p">,</span> <span class="nx">_ref3</span><span class="p">,</span> <span class="nx">_ref4</span><span class="p">,</span> <span class="nx">_ref5</span><span class="p">,</span> <span class="nx">_ref6</span><span class="p">,</span> <span class="nx">_ref7</span><span class="p">;</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(((</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;=</span> <span class="p">(</span><span class="nx">_ref1</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref1</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref</span> <span class="o">&lt;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="nx">other</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref3</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref3</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref2</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref2</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="nx">other</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref5</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref5</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref4</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref4</span> <span class="o">&lt;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;=</span> <span class="p">(</span><span class="nx">_ref7</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref7</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref6</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref6</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">other</span><span class="p">;</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC111'><span class="cm">    * Subtract one range from another.</span></div><div class='line' id='LC112'><span class="cm">    * @param {!DateRange} other A date range to substract from this one.</span></div><div class='line' id='LC113'><span class="cm">    * @return {!DateRange[]}</span></div><div class='line' id='LC114'><span class="cm">  *</span></div><div class='line' id='LC115'><span class="cm">  */</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subtract</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_ref</span><span class="p">,</span> <span class="nx">_ref1</span><span class="p">,</span> <span class="nx">_ref2</span><span class="p">,</span> <span class="nx">_ref3</span><span class="p">,</span> <span class="nx">_ref4</span><span class="p">,</span> <span class="nx">_ref5</span><span class="p">,</span> <span class="nx">_ref6</span><span class="p">,</span> <span class="nx">_ref7</span><span class="p">;</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">intersect</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="k">this</span><span class="p">];</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="nx">other</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;=</span> <span class="p">(</span><span class="nx">_ref1</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref1</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref</span> <span class="o">&lt;=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="nx">other</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;=</span> <span class="p">(</span><span class="nx">_ref3</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref3</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref2</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref2</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">)];</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref5</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref5</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref4</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref4</span> <span class="o">&lt;=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">)];</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref7</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref7</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">_ref6</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">_ref6</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">),</span> <span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">)];</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC134'><span class="cm">    * Iterate over the date range by a given date range, executing a function</span></div><div class='line' id='LC135'><span class="cm">    * for each sub-range.</span></div><div class='line' id='LC136'><span class="cm">    * @param {!DateRange|String} range     Date range to be used for iteration</span></div><div class='line' id='LC137'><span class="cm">    *                                      or shorthand string (shorthands:</span></div><div class='line' id='LC138'><span class="cm">    *                                      http://momentjs.com/docs/#/manipulating/add/)</span></div><div class='line' id='LC139'><span class="cm">    * @param {!function(Moment)} hollaback Function to execute for each sub-range.</span></div><div class='line' id='LC140'><span class="cm">    * @return {!boolean}</span></div><div class='line' id='LC141'><span class="cm">  *</span></div><div class='line' id='LC142'><span class="cm">  */</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">by</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">range</span><span class="p">,</span> <span class="nx">hollaback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">range</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_by_string</span><span class="p">(</span><span class="nx">range</span><span class="p">,</span> <span class="nx">hollaback</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_by_range</span><span class="p">(</span><span class="nx">range</span><span class="p">,</span> <span class="nx">hollaback</span><span class="p">);</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC155'><span class="cm">    * Date range in milliseconds. Allows basic coercion math of date ranges.</span></div><div class='line' id='LC156'><span class="cm">    * @return {!number}</span></div><div class='line' id='LC157'><span class="cm">  *</span></div><div class='line' id='LC158'><span class="cm">  */</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">valueOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC166'><span class="cm">    * Date range toDate</span></div><div class='line' id='LC167'><span class="cm">    * @return  {!Array}</span></div><div class='line' id='LC168'><span class="cm">  *</span></div><div class='line' id='LC169'><span class="cm">  */</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">toDate</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">toDate</span><span class="p">()];</span></div><div class='line' id='LC174'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC177'><span class="cm">    * Determine if this date range is the same as another.</span></div><div class='line' id='LC178'><span class="cm">    * @param {!DateRange} other Another date range to compare to.</span></div><div class='line' id='LC179'><span class="cm">    * @return {!boolean}</span></div><div class='line' id='LC180'><span class="cm">  *</span></div><div class='line' id='LC181'><span class="cm">  */</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="nx">DateRange</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isSame</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">isSame</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">isSame</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">DateRange</span><span class="p">;</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'><span class="p">})();</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'><span class="cm">/**</span></div><div class='line' id='LC193'><span class="cm">  * Build a date range.</span></div><div class='line' id='LC194'><span class="cm">  * @param {(Moment|Date)} start Start of range.</span></div><div class='line' id='LC195'><span class="cm">  * @param {(Moment|Date)} end   End of range.</span></div><div class='line' id='LC196'><span class="cm">  * @this {Moment}</span></div><div class='line' id='LC197'><span class="cm">  * @return {!DateRange}</span></div><div class='line' id='LC198'><span class="cm">*</span></div><div class='line' id='LC199'><span class="cm">*/</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'><span class="nx">moment</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">range</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC203'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">([</span><span class="s1">&#39;year&#39;</span><span class="p">,</span> <span class="s1">&#39;month&#39;</span><span class="p">,</span> <span class="s1">&#39;week&#39;</span><span class="p">,</span> <span class="s1">&#39;day&#39;</span><span class="p">,</span> <span class="s1">&#39;hour&#39;</span><span class="p">,</span> <span class="s1">&#39;minute&#39;</span><span class="p">,</span> <span class="s1">&#39;second&#39;</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">start</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="nx">moment</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">startOf</span><span class="p">(</span><span class="nx">start</span><span class="p">),</span> <span class="nx">moment</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">endOf</span><span class="p">(</span><span class="nx">start</span><span class="p">));</span></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">DateRange</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC208'><span class="p">};</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'><span class="cm">/**</span></div><div class='line' id='LC211'><span class="cm">  * Check if the current moment is within a given date range.</span></div><div class='line' id='LC212'><span class="cm">  * @param {!DateRange} range Date range to check.</span></div><div class='line' id='LC213'><span class="cm">  * @this {Moment}</span></div><div class='line' id='LC214'><span class="cm">  * @return {!boolean}</span></div><div class='line' id='LC215'><span class="cm">*</span></div><div class='line' id='LC216'><span class="cm">*/</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><span class="nx">moment</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">within</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">range</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">range</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_d</span><span class="p">);</span></div><div class='line' id='LC221'><span class="p">};</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03224s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

