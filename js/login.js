import { createClient } from "https://esm.sh/@supabase/supabase-js@2.119.0";

const supabase = createClient('https://rfsvjzrdvnjajvuannai.supabase.co', 'sb_publishable_AWoXyOtVqH6tq5HxOh54Gw_wJsDIyPS');
const { data } = await supabase.from('profiles').select('*');
const loginForm = document.getElementById("loginForm");

console.log(supabase);

function loginAuth (user, password) {
    let logged
    let session;
    data.forEach(user => {
        if (user.usr_username.localeCompare(user)) {
            session = user;
            if (user.password === password){
                logged = true;
                return session;
            }
        }
    });
    if (!logged) {
        throw new loggedError;
    }
}