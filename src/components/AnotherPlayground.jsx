import React, {useEffect, useState} from 'react';
import { ExecuteButton, GraphiQLProvider, HeaderEditor, QueryEditor, ResponseEditor, Tab, Tabs, useEditorContext, VariableEditor } from '@graphiql/react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import 'graphiql/graphiql.css';
import '@graphiql/react/dist/style.css'
import '@graphiql/react/font/roboto.css'
import '@graphiql/react/font/fira-code.css';
import { useExplorerPlugin } from '@graphiql/plugin-explorer'

const AnotherPlayground = ({queryProp}) => {
    const fetcher = createGraphiQLFetcher({
        url: `https://api.spacex.land/graphql/`,
    });
    const [query, setQuery] = useState(queryProp[0].query);
    const [tabQueries, setTabQueries] = useState(queryProp);
    const editorContext = useEditorContext(queryProp)

  
    const explorerPlugin = useExplorerPlugin({
        query,
        onEdit: setQuery,
    });

    return (
        <GraphiQLProvider 
            fetcher={fetcher} 
            plugins={[explorerPlugin]} 
            defaultTabs={tabQueries}
            onEditQuery={setQuery}
        >
            <div className='graphiql-container' style={{height: '50vh'}}>
                <div className='graphiql-main'>
                    <div className="graphiql-sessions" style={{maxWidth: '50px'}}>
                        <div className="graphiql-session-header">
                            {/* <Tabs>
                                {editorContext?.tabs.length > 1 ? (
                                <>
                                    {
                                    editorContext.tabs.map((tab, i) => 
                                        <Tab key={tab.id}
                                        isActive={i === editorContext.activeTabIndex} />
                                    )
                                    }
                                </>
                                ):null}
                            </Tabs> */}
                            <div className="graphiql-session-header-right"></div>
                        </div>
                    </div>
                    <section className='graphiql-query-editor'>
                        <div className="graphiql-query-editor-wrapper">
                            <QueryEditor />
                        </div>
                        <div className='graphiql-toolbar'>
                            <ExecuteButton />
                        </div>
                        <div className="graphiql-response">
                            <ResponseEditor />
                        </div>
                    </section>
                    <section className='graphiql-editor-tools'>

                    </section>
                </div>
            </div>
        </GraphiQLProvider>
    )

}

export default AnotherPlayground;