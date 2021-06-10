import React, { useEffect, useState, createRef } from "react"
import Grid from "@material-ui/core/Grid"
import Avatar from "../images/avatar.png"
import "../styles/index.scss"
import { magic } from "../lib/magic"
import { UserContext } from "../lib/UserContext"
import Cursor from "../images/cursor.png"

const IndexPage = () => {
  const [user, setUser] = useState(null)
  let userEmail = createRef()

  const handleEmailLogin = async (e) => {
    const email = userEmail.current.value
    if (!email) return

    try {
      await magic.auth.loginWithMagicLink({
        email
      })

      let userMetadata = await magic.user.getMetadata()
      setUser(userMetadata)
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = async () => {
    await magic.user.logout()
    setUser(null)
  }

  useEffect(() => {
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser(null)
    })
  }, [])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="IndexWrapper">
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
        <Grid container className="IndexContainer">
          <Grid item xs={12}>
            <div className="LoginContainer">
              {user ? <h1>Logged in!</h1> : <h1>Login</h1>}{" "}
              <img src={Cursor} alt="Cursor" />
            </div>
            {user ? (
              <div className="LoggedInInfo">
                <p>
                  Email: <span>{user.email}</span>
                </p>
                <p>
                  Public address: <span>{user.publicAddress}</span>
                </p>
              </div>
            ) : (
              <input
                type="text"
                placeholder="Enter your email"
                autoCorrect="off"
                ref={userEmail}
              />
            )}
            <button onClick={user ? handleLogout : handleEmailLogin}>
              <p>{user ? "Logout" : "Send Magic Link"}</p>
            </button>
          </Grid>
        </Grid>
        <Grid container className="Footer">
          <Grid item xs={2}>
            <img src={Avatar} alt="Avatar" />
          </Grid>
          <Grid item xs={10} className="FooterLink">
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
    </UserContext.Provider>
  )
}

export default IndexPage
