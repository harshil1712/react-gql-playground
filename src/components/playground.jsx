import React, {useState,useEffect} from 'react'
import { createGraphiQLFetcher, StorageAPI } from '@graphiql/toolkit';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import { useExplorerPlugin } from '@graphiql/plugin-explorer';

const Playground = ({queryProp}) => {

    const fetcher = createGraphiQLFetcher({
        url: `https://api.spacex.land/graphql/`,
    });
    const [query, setQuery] = useState(queryProp[0].query);
    const [tabQueries, setTabQueries] = useState(queryProp);
  
    const explorerPlugin = useExplorerPlugin({
        query,
        onEdit: setQuery,
    });
    return(
        <GraphiQL 
          fetcher={fetcher} 
          onEditQuery={setQuery}
          query={query}
          plugins={[explorerPlugin]}
          defaultTabs={tabQueries}
        >
      </GraphiQL>)
}

export default Playground