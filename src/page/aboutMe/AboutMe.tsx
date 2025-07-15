const AboutMe = () => {
    return ( 
        <section className=" p-5 flex flex-col items-center gap-5">
            
            <h1 className="text-4xl">About Me</h1>

            <div className="flex flex-col-reverse items-centerjustify-center gap-5 ">
                <div 
                className=" flex flex-col items-center text-center gap-2 text-red/80">
                    <p className="text-md">Moin,
                        ich freue mich über den Besuch auf meiner Seite :)
                    </p>
                    <p>
                         Mein Name ist Katharina, ich bin fast 30 Jahre alt und habe dieses Jahr meine Umschulung als <span className="text-red">Webdeveloper*in</span> abgeschlossen. 
                    </p>
                    <p>
                       Ich bin davon überzeugt, dass jede Fähigkeit dabei unterstützen kann Probleme auf <span className="text-red">individuelle</span>  Art und Weise zu lösen. Meine Erfahrung als Logopäd*in hat im ersten Moment wenig mit dem Feld des Entwickelns zu tun, hilft mir aber dabei
                    </p>
                    <ul className="list-disc text-red flex flex-col items-start">
                        <li>mich produktiv selbstständig zu organisieren</li>
                        <li>effizient und zielgerichtet in einem interdisziplinären Team zu arbeiten</li>
                        <li>und kreativ immer unterschiedliche Probleme angepasst lösen zu können.</li>
                    </ul>
                </div>

                <img 
                src="/src/assets/img/about.jpg" 
                alt="a picture of me"
                className="h-80 rounded-xl" 
                />
            </div>
           
        </section>
       
        
     );
}
 
export default AboutMe;