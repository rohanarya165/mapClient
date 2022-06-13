import { akitaDevtools, persistState, resetStores } from "@datorama/akita";
import React, { createContext, ReactNode, useContext } from "react";
import SimpleCrypto from "simple-crypto-js";
import { ESComponentProps } from "../models/interfaces/component.interface";
// import { CoreConstants } from "../../../../../../helios/encore/encorestatefe/src/modules/core/models/constants/core.constants";
// import { ESComponentProps } from "../../../../../../helios/encore/encorestatefe/src/modules/core/models/interfaces/component.interface";

export interface CoreServiceOperations {
  setUpApplication: Function;
  tearDownApplication: Function;
}
const CoreServiceContext = createContext<CoreServiceOperations | null>(null);

export const CoreServiceProvider = (props: ESComponentProps) => {
  let persistStorage: any;
  let simpleCrypto: SimpleCrypto;
  const setUpApplication = (body: any) => {
    setupCryptography();
    setupStateManagement();
  };

  const tearDownApplication = () => {
    resetStateManagement();
  };

  const setupCryptography = () => {
    simpleCrypto = new SimpleCrypto("mapClient");
  };

  const setupStateManagement = () => {
    if (process.env.NODE_ENV !== "production") {
      akitaDevtools();
    }
    persistStorage = persistState({
      include: ["auth", "user", "savedUsers", "clientListData"],
      preStorageUpdate(storeName, state) {
        if (simpleCrypto) {
          return simpleCrypto.encrypt(state);
        }
        return state;
      },
      preStoreUpdate(storeName, state) {
        if (simpleCrypto) {
          return simpleCrypto.decrypt(state);
        }
        return state;
      },
    });
  };

  const resetStateManagement = () => {
    resetStores();

    if (persistStorage) {
      setTimeout(() => {
        persistStorage.clearStore();
      }, 0);
    }
  };

  const CoreServiceOperations: CoreServiceOperations = {
    setUpApplication,
    tearDownApplication,
  };

  return (
    <CoreServiceContext.Provider value={CoreServiceOperations}>
      {props.children as ReactNode}
    </CoreServiceContext.Provider>
  );
};

export const useCoreService = () => {
  return useContext(CoreServiceContext);
};
