import * as React from "react";
import { Header, TitleSize } from "azure-devops-ui/Header";
import { Card } from "azure-devops-ui/Card";
import * as SDK from "azure-devops-extension-sdk";
import "azure-devops-ui/Core/override.css";
import "../common";
import { showRootComponent } from "../common";

export class Tab extends React.Component<{}, {}> {
  public componentDidMount() {
    SDK.init();
  }

  public render(): JSX.Element {
    return (
      <div style={{width:"100%"}}>
        <Header title="Custom Tab" titleSize={TitleSize.Large} />
        <div className="page-content flex-grow" style={{marginTop: "20px", marginLeft: "20px", marginRight: "20px"}}>
          <Card>page content</Card>
        </div>
      </div>
    );
  }
}

export default Tab;

showRootComponent(<Tab />);
