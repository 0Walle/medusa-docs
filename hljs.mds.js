hljs.registerLanguage("mds",function(e){
    var t="([ui](8|16|32|64|128|size)|f(32|64))?",
        r="box break const continue do else enum extern false fn for if let match return static struct super true virtual while yield",
        n="byte int float str bool Array ListIter StrIter Range Fn";
    return{
        aliases:["rs"],
        k:{
            keyword:r,
            literal:"true false none",
            built_in:n
        },
        l:e.IR+"!?",
        i:"</",
        c:[
            e.CLCM,
            e.C("/\\*","\\*/",{c:["self"]}),
            e.inherit(e.QSM,{b:/b?"/,i:null}),
            {cN:"string",
                v:[
                    {b:/r(#*)"(.|\n)*?"\1(?!#)/},
                    {b:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}
                ]
            },
            {cN:"symbol",
                b:/'[a-zA-Z_][a-zA-Z0-9_]*/
            },
            {cN:"number",
                v:[
                    {b:"\\b0b([01_]+)"},
                    {b:"\\b0x([A-Fa-f0-9_]+)"},
                    {b:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"}
                ],
                r:0
            },
            {cN:"function",
                bK:"fn",
                e:"(\\(|<)",
                eE:!0,
                c:[e.UTM]
            },
            {cN:"meta",
                b:"@\\[",e:"\\]",
                c:[
                    {cN:"meta-string",b:/"/,e:/"/}
                ]
            },
            // {cN:"class",
            //     bK:"type",
            //     e:";",
            //     c:[e.inherit(e.UTM,{endsParent:!0})],
            //     i:"\\S"
            // },
            // {cN:"class",
            //     bK:"trait enum struct union",
            //     e:"{",c:[e.inherit(e.UTM,{endsParent:!0})],i:"[\\w\\d]"
            // },
            // {b:e.IR+"::",k:{built_in:n}},
            // {b:"->"}
        ]
    }
});