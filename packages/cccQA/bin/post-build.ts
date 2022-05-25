import path from "path";

import { formatExportedComponents } from "../../../utils/utils";

// Path of the components exported by `dist-custom-elements`
formatExportedComponents(path.join(__dirname, "../dist/components"));
