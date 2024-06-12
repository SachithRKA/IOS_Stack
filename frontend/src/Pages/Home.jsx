import React from "react";
import {Link, Outlet} from "react-router-dom";

function Home() {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Raspberry Pi Dashboard</h1>
                <nav>
                    <ul>
                        <li>Register Device</li>
                        <li>Generate Token / SSH Key</li>
                        <li>Remote Control</li>
                        <li>Network Settings</li>
                        <li>Online Status</li>
                    </ul>
                </nav>
            </header>
            <main className="dashboard-main">
                <section className="register-device">
                    <h2>Register Device</h2>
                    <form>
                        <input type="text" placeholder="Device Name" />
                        <button type="submit">Register</button>
                    </form>
                </section>

                <section className="tutorial">
                    <h2>How to Connect: </h2>
                    <Link className="link" aria-current="page" to="/tutorial"> Tutorial</Link>
                    <h2>Connected devices: </h2>
                </section>

                <section className="generate-token">
                    <h2>Generate Client Token / SSH Key</h2>
                    <form>
                        <input type="text" placeholder="Token Name" />
                        <button type="submit">Generate</button>
                    </form>
                </section>
                <section className="remote-control">
                    <h2>Remote Control</h2>
                    <div className="remote-buttons">
                        <button>Reboot</button>
                        <button>Update</button>
                        <button>Restart</button>
                    </div>
                </section>
                <section className="network-settings">
                    <h2>Network Settings</h2>
                    <form>
                        <input type="text" placeholder="WiFi SSID" />
                        <input type="password" placeholder="WiFi Password" />
                        <button type="submit">Save</button>
                    </form>
                </section>
                <section className="online-status">
                    <h2>Online Status</h2>
                    <div className="status-indicator online"></div>
                    <p>Device is online</p>
                </section>
            </main>
        </div>
    );
}

export default Home;
