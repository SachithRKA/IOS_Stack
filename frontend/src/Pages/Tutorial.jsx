import React from "react";

function Tutorial() {
    return (
        <div className="tutorial">
            <h1>Raspberry Pi Connection</h1>
            
            <section>
                <h2>Setup Instructions on the Website</h2>

                <div className="step">
                    <h3>How to Connect the Raspberry Pi:</h3>
                    <ul>
                        <li>Detailed step-by-step guide with images or video tutorials for physical setup (connecting power, monitor, keyboard, and mouse).</li>
                        <li>Instructions on how to flash the Raspberry Pi OS onto the microSD card.</li>
                    </ul>
                </div>

                <div className="step">
                    <h3>Code and Dependencies:</h3>
                    <h4>Required Software:</h4>
                    <ul>
                        <li>Provide a list of necessary software and dependencies (e.g., Python, specific libraries).</li>
                        <li>Detailed instructions for installing these dependencies on the Raspberry Pi.</li>
                    </ul>
                    <h4>Connection Script:</h4>
                    <ul>
                        <li>Provide the connection script that needs to be run on the Raspberry Pi.</li>
                        <li>Ensure the script is well-documented, explaining each part of the code.</li>
                    </ul>
                </div>

                <div className="step">
                    <h3>Connection to the Website:</h3>
                    <h4>API Endpoint Information:</h4>
                    <ul>
                        <li>Provide details of the API endpoint where the Raspberry Pi will send its registration data.</li>
                        <li>Include example data payloads and expected responses.</li>
                    </ul>
                    <h4>Verification:</h4>
                    <ul>
                        <li>Steps to verify the connection, including how to check if the device appears on the dashboard.</li>
                        <li>Troubleshooting section for common issues users might encounter during setup.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Detailed Steps</h2>

                <div className="step">
                    <h3>Step 1: Setup Instructions</h3>
                    <h4>Page Content:</h4>
                    <ul>
                        <li>Introduction to the Raspberry Pi and its capabilities.</li>
                        <li>Detailed guide with visuals:
                            <ul>
                                <li>Unboxing and assembling the Raspberry Pi.</li>
                                <li>Flashing the Raspberry Pi OS using tools like Balena Etcher.</li>
                                <li>Initial boot and basic configuration (locale, Wi-Fi setup).</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="step">
                    <h3>Step 2: Code and Dependencies</h3>
                    <h4>Page Content:</h4>
                    <ul>
                        <li>List of software to install:</li>
                        <pre><code>sudo apt update
                            sudo apt upgrade
                            sudo apt install python3 python3-pip openssh-server</code></pre>
                        <li>Python script with dependencies:</li>
                        <pre><code>{`SERVER_URL = 'http://your-server.com/register'

def get_ip_address():
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    return ip_address

data = {
    'device_id': 'raspberry_pi_1',
    'ip_address': get_ip_address(),
    'status': 'online'
}

response = requests.post(SERVER_URL, json=data)

if response.status_code == 200:
    print('Device registered successfully.')
else:
    print('Failed to register device:', response.text)`}
                        </code></pre>
                        <li>Instructions to install Python libraries:</li>
                        <pre><code>pip3 install requests</code></pre>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Tutorial;
