"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustTrackingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AdjustTrackingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AdjustTrackingInfo", [
            { no: 1, name: "idfa", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "gps_adid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "fire_adid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "adid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "event_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "app_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { idfa: "", gpsAdid: "", fireAdid: "", adid: "", eventToken: "", appToken: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string idfa */ 1:
                    message.idfa = reader.string();
                    break;
                case /* string gps_adid */ 2:
                    message.gpsAdid = reader.string();
                    break;
                case /* string fire_adid */ 3:
                    message.fireAdid = reader.string();
                    break;
                case /* string adid */ 4:
                    message.adid = reader.string();
                    break;
                case /* string event_token */ 5:
                    message.eventToken = reader.string();
                    break;
                case /* string app_token */ 6:
                    message.appToken = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string idfa = 1; */
        if (message.idfa !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.idfa);
        /* string gps_adid = 2; */
        if (message.gpsAdid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.gpsAdid);
        /* string fire_adid = 3; */
        if (message.fireAdid !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.fireAdid);
        /* string adid = 4; */
        if (message.adid !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.adid);
        /* string event_token = 5; */
        if (message.eventToken !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.eventToken);
        /* string app_token = 6; */
        if (message.appToken !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.appToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AdjustTrackingInfo
 */
exports.AdjustTrackingInfo = new AdjustTrackingInfo$Type();
