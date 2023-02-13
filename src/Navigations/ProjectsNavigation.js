import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectsNavigation = () => {
    return (
        <div>
            <div className='left-side-navigation'>
            <div className="links">
                <NavLink to='/projects'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.12109 17.5625C6.70709 17.5625 6.37109 17.2265 6.37109 16.8125V9.95251C6.37109 9.53851 6.70709 9.20251 7.12109 9.20251C7.53509 9.20251 7.87109 9.53851 7.87109 9.95251V16.8125C7.87109 17.2265 7.53509 17.5625 7.12109 17.5625Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7881 17.5615C11.3741 17.5615 11.0381 17.2255 11.0381 16.8115V6.66852C11.0381 6.25452 11.3741 5.91852 11.7881 5.91852C12.2021 5.91852 12.5381 6.25452 12.5381 6.66852V16.8115C12.5381 17.2255 12.2021 17.5615 11.7881 17.5615Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3784 17.5615C15.9644 17.5615 15.6284 17.2255 15.6284 16.8115V13.5775C15.6284 13.1635 15.9644 12.8275 16.3784 12.8275C16.7924 12.8275 17.1284 13.1635 17.1284 13.5775V16.8115C17.1284 17.2255 16.7924 17.5615 16.3784 17.5615Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5H7.064ZM16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5Z" />
                    </svg>

                </NavLink>
                <NavLink to='/peoples'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g mask="url(#mask0_14_488)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59182 15.457C6.81282 15.457 3.49982 15.814 3.49982 17.519C3.49982 18.871 5.54982 19.557 9.59182 19.557C13.6338 19.557 15.6838 18.864 15.6838 17.499C15.6838 16.144 13.6338 15.457 9.59182 15.457ZM9.59182 21.057C7.51582 21.057 1.99982 21.057 1.99982 17.519C1.99982 13.957 7.71382 13.957 9.59182 13.957C12.8508 13.957 17.1838 14.324 17.1838 17.499C17.1838 21.057 11.4698 21.057 9.59182 21.057Z" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59181 3.5C7.58681 3.5 5.95581 5.131 5.95581 7.135C5.95581 9.139 7.58681 10.77 9.59181 10.77H9.62281C10.5868 10.766 11.4948 10.387 12.1758 9.7C12.8578 9.015 13.2308 8.104 13.2268 7.138C13.2268 5.131 11.5958 3.5 9.59181 3.5ZM9.59181 12.27C6.75981 12.27 4.45581 9.966 4.45581 7.135C4.45581 4.304 6.75981 2 9.59181 2C12.4228 2 14.7268 4.304 14.7268 7.135C14.7328 8.499 14.2038 9.787 13.2398 10.757C12.2778 11.728 10.9928 12.265 9.62581 12.27H9.59181Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4824 11.1318C16.1144 11.1318 15.7934 10.8608 15.7404 10.4858C15.6834 10.0758 15.9684 9.69583 16.3784 9.63883C17.6264 9.46383 18.5684 8.38083 18.5704 7.11883C18.5704 5.86483 17.6724 4.80683 16.4374 4.60483C16.0284 4.53683 15.7514 4.15183 15.8184 3.74283C15.8854 3.33383 16.2724 3.05883 16.6794 3.12383C18.6444 3.44583 20.0704 5.12683 20.0704 7.11983C20.0664 9.12483 18.5694 10.8468 16.5874 11.1248C16.5524 11.1298 16.5174 11.1318 16.4824 11.1318Z" />

                        <g mask="url(#mask1_14_488)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8955 18.4609C19.5925 18.4609 19.3075 18.2759 19.1945 17.9769C19.0475 17.5899 19.2425 17.1559 19.6295 17.0099C20.4795 16.6879 20.4795 16.2949 20.4795 16.1269C20.4795 15.5599 19.8085 15.1719 18.4855 14.9749C18.0755 14.9129 17.7925 14.5309 17.8535 14.1219C17.9155 13.7119 18.3045 13.4369 18.7065 13.4899C21.4125 13.8949 21.9795 15.1479 21.9795 16.1269C21.9795 16.8559 21.6645 17.8429 20.1615 18.4119C20.0745 18.4449 19.9845 18.4609 19.8955 18.4609Z" />
                        </g>
                    </svg>
                </NavLink>
                <NavLink to='/completed-tasks'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.665 3.5C5.135 3.5 3.5 5.233 3.5 7.916V16.084C3.5 18.767 5.135 20.5 7.665 20.5H16.333C18.864 20.5 20.5 18.767 20.5 16.084V7.916C20.5 5.233 18.864 3.5 16.334 3.5H7.665ZM16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2H16.334C19.723 2 22 4.378 22 7.916V16.084C22 19.622 19.723 22 16.333 22Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8135 15.123C10.6225 15.123 10.4295 15.05 10.2835 14.903L7.90951 12.53C7.61651 12.237 7.61651 11.763 7.90951 11.47C8.20251 11.177 8.67651 11.177 8.96951 11.47L10.8135 13.312L15.0295 9.09701C15.3225 8.80401 15.7965 8.80401 16.0895 9.09701C16.3825 9.39001 16.3825 9.86401 16.0895 10.157L11.3435 14.903C11.1975 15.05 11.0055 15.123 10.8135 15.123Z" />
                    </svg>
                </NavLink>
                <NavLink to='/remaining-tasks'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60247 15.1367C9.41047 15.1367 9.21847 15.0637 9.07247 14.9167C8.77947 14.6237 8.77947 14.1497 9.07247 13.8567L13.8645 9.06472C14.1575 8.77172 14.6315 8.77172 14.9245 9.06472C15.2175 9.35772 15.2175 9.83172 14.9245 10.1247L10.1325 14.9167C9.98647 15.0637 9.79447 15.1367 9.60247 15.1367" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3965 15.1396C14.2045 15.1396 14.0125 15.0666 13.8665 14.9196L9.07052 10.1226C8.77752 9.82958 8.77752 9.35558 9.07052 9.06258C9.36452 8.76958 9.83852 8.76958 10.1305 9.06258L14.9265 13.8596C15.2195 14.1526 15.2195 14.6266 14.9265 14.9196C14.7805 15.0666 14.5875 15.1396 14.3965 15.1396" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.665 3.5C5.135 3.5 3.5 5.233 3.5 7.916V16.084C3.5 18.767 5.135 20.5 7.665 20.5H16.333C18.864 20.5 20.5 18.767 20.5 16.084V7.916C20.5 5.233 18.864 3.5 16.334 3.5H7.665ZM16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2H16.334C19.723 2 22 4.378 22 7.916V16.084C22 19.622 19.723 22 16.333 22V22Z" />
                    </svg>

                </NavLink>
            </div>
        </div>
        </div>
    );
};

export default ProjectsNavigation;