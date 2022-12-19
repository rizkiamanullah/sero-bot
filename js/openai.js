// https://api.openai.com/v1/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer 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" \
//   -d '{
//   "model": "text-davinci-003",
//   "prompt": "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. Human: Hello, who are you? AI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
//   "temperature": 0.9,
//   "max_tokens": 150,
//   "top_p": 1,
//   "frequency_penalty": 0.0,
//   "presence_penalty": 0.6,
//   "stop": [" Human:", " AI:"]
// }'

function fetchBot(prompt) {
    const url = 'https://api.openai.com/v1/completions';
    var usedPrompt = getMessage() + prompt;
    var not = '';
    database
    .ref('open_key')
    .on('value', function(s){
        var k = s.val();
        not = k[0].key;

        const data = {
            "model": "text-davinci-003",
            "prompt": usedPrompt,
            "temperature": 0.9,
            "max_tokens": 150,
            "top_p": 1,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.6,
            "stop": [" Human:", " AI:"],
            "echo": true,
        };

        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', `Bearer ${not}`);
            },
            data: JSON.stringify(data),
            success: function(res){
                var anwser = res.choices[0].text; 
                console.log(anwser);
                var anwser_clean = anwser.replace(usedPrompt,''); 
                var anwser_clean = anwser_clean.replace('AI Assistant: ',''); 
                var anwser_clean = anwser_clean.replace('AI: ',''); 
                console.log(anwser);
                console.log(anwser_clean);
                var data = {
                    message: 'AI: '+anwser_clean,
                    type: 'Bot',
                }
                chat_log.push(data);
                $('#chat_box').append(blob_bot(anwser_clean));
            },
            error: function(e){
                console.log(e);
            }
        });
    });
}

function deleteChatLog(){
    window.location.href;
    // chat_log.remove()
    // .then(function(){
    //     console.log('cleaned');
    // })
    // .catch(function(e){
    //     console.log('failed: ' + e.message);
    // });
}