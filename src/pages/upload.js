import React from "react"
import { useRef, useState } from 'react'

import Layout from "../components/layout"

const UploadPage = () => {
    
    const form = useRef(null);
    const file = useRef(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let formData = new FormData(form.current);
        console.log(file);

        var customText = document.getElementById("file-upload-filename");

        customText.innerHTML = file.value;
    }
    
        // var realFileBtn = document.getElementById("real-file");
        // var customBtn = document.getElementById("custom-button");
        // var customTxt = document.getElementById("custom-text");

        // customBtn.addEventListener("click", function() {
        //     realFileBtn.click()
        // });
    
        // realFileBtn.addEventListener("change", function() {
        //     if (realFileBtn.value) {
        //         customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        //     } else {
        //         customTxt.innerHTML = "No file chosen, yet.";
        //     }
        // });

        // onClick( event ) {
        //     realFileBtn.click();
        // }

        // onChange( event ) {
        //     if (realFileBtn.value) {
        //         customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        //     } else {
        //         customTxt.innerHTML = "No file chosen, yet.";
        //     }
        // }

 return (
    <Layout>
    <div className="main-background-custom">
      <div className="upload-field">
        <form className="upload-panel" ref={form} onSubmit={handleSubmit}>
        {/* <form className="upload-panel"> */}
            <h1>Upload Markdown File</h1>

            <input type="file" name="file" id="file" className="inputfile" ref={file} />
            <label htmlFor="file">Choose a file</label>

            {/* <input type="file" id="real-file" hidden="hidden" />
            <button type="button" id="custom-button" onClick={this.onClick} onChange={this.onChange}>CHOOSE A FILE</button>
            <span id="custom-text">No file chosen, yet.</span> */}
            <div id="file-upload-filename" class="file-upload"></div>
            <br />
            <div className="department">
                <label>Department:</label>
                <select className="select-dept">
                    <option value="" disabled selected>Select Department</option>
                    <option value="admin">Admin</option>
                    <option value="nmg">New Media Group</option>
                    <option value="rnd">Research and Development</option>
                    <option value="sre">Site Reliability Engineer</option>
                    <option value="delivery">Delivery</option>
                </select>
            </div>
            <br />
            <div className="file-category">
                <label>File Category:</label>
                <select className="select-filecat">
                    <option value="" disabled selected>Select File Category</option>
                    <option value="mission">Mission</option>
                    <option value="vision">Vision</option>
                    <option value="roadmap">Roadmap</option>
                    <option value="resources">Resources</option>
                </select>
            </div>
            <br />
            <button type="submit" className="submit-btn">Submit</button>

        </form>
      </div>
    </div>
  </Layout>
 )
}

export default UploadPage
