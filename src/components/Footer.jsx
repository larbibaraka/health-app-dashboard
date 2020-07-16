import React from 'react'

export  function Footer() {
    return (
        <footer className="text-xl self-center">
          Coded with <span className="text-red-600 mr-1">♥</span>
          By <span className="text-blue-500 mr-1">Baraka Larbi /</span>
          {new Date().getFullYear()}
        </footer>
    )
}
