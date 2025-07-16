import SkillsView from "../../component/skillsView/SkillsView";

const SkillsTech = () => {
    return ( 
        <section className="flex flex-col items-center py-5">
            <img 
                src="/src/assets/img/skills&tech.svg" 
                 alt="skills&tech"
                className="h-14 md:h-15" 
                />
             <SkillsView/>
             <p className="text-[0.6rem]">drag skills if you like :)</p>
        </section>
       
     );
}
 
export default SkillsTech;