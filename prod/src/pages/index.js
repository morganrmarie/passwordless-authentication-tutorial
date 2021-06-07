import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Avatar from "../images/avatar.png"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <div className="Index__Wrapper">
      <title>Magic Tutorial: Passwordless Authentication</title>
      <Grid container className="Header">
        <Grid item xs={12}>
          <a href="https://medium.com" target="_blank" rel="noreferrer">
            Magic + Gatsby.js Tutorial
          </a>
        </Grid>
        <Grid item xs={12}>
          <a
            href="https://github.com/morganrmarie/passwordless-authentication-tutorial"
            target="_blank"
            rel="noreferrer"
          >
            Full Source Code
          </a>
        </Grid>
      </Grid>
      <Grid container className="Index__Container">
        <Grid item xs={12}>
          <h1>Login</h1>
          <input type="text" placeholder="Enter your email" autocorrect="off" />
          <button>
            <p>Send Magic Link</p>
          </button>
        </Grid>
      </Grid>
      <Grid container className="Footer">
        <Grid item xs={2}>
          <img src={Avatar} alt="Avatar" />
        </Grid>
        <Grid item xs={10} className="Footer__Link">
          <a
            href="https://instagram.com/morgan.codes"
            target="_blank"
            rel="noreferrer"
          >
            <p>Created by MorganCodes</p>
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

export default IndexPage
