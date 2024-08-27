//import React from 'react'
import '../csss/Logo.css/'

export default function Logo() {
  return (
    <div>
        <div className="container"/>
    
    <div id="login-row" className="row justify-content-end align-items-end">
        
        <div id="login-column" className="col-md-50">
            
        
            
            
            <div className="box">
               <p className="login-msg-above"> <h2>Annotation Tool Login</h2></p>
            <br/> 
                
                
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="shape3"></div>
                <div className="shape4"></div>
                <div className="shape5"></div>
                <div className="shape6"></div>
                <div className="shape7"></div>
                <div className="float">
                    <form className="form" action=""/>
                        <div className="form-group">
                            <label className="text-white">Username:</label><br/>
                            <input type="text" name="username" id="username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-white">Password:</label><br/>
                            <input type="text" name="password" id="password" className="form-control"/>
                        <div/>
                        <div className="form-group">
                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                        </div>
                    <form/>
                </div>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}
