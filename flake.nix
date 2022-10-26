{
  description = "Demonstrating The Pipelines Pattern In Golang";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        devShell = let
          node-packages = (import ./. {
            inherit pkgs;
            nodejs = pkgs.nodejs;
          });
        in pkgs.mkShell {
          hardeningDisable = [ "all" ];
          buildInputs = with pkgs; [ nodejs nodePackages.npm node2nix ];
          shellHook = ''
            export NODE_PATH=${node-packages.nodeDependencies}/lib/node_modules
            export PATH="${node-packages.nodeDependencies}/bin:$PATH"
          '';
        };
      });
}
