function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
    var member = {
        name: 'John',
        age: 25,
        skills: skills
    };
    console.log(member.skills[3]);
    console.log(member.skills.length);
}