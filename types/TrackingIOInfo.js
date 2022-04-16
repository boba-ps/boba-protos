"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingIOInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TrackingIOInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TrackingIOInfo", [
            { no: 1, name: "appid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "deviceid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mac", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "rydevicetype", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "client_tz", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "current_caid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "cached_caid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { appid: "", deviceid: "", mac: "", rydevicetype: "", clientTz: "", currentCaid: "", cachedCaid: "" };
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
                case /* string appid */ 1:
                    message.appid = reader.string();
                    break;
                case /* string deviceid */ 2:
                    message.deviceid = reader.string();
                    break;
                case /* string mac */ 3:
                    message.mac = reader.string();
                    break;
                case /* string rydevicetype */ 4:
                    message.rydevicetype = reader.string();
                    break;
                case /* string client_tz */ 5:
                    message.clientTz = reader.string();
                    break;
                case /* string current_caid */ 6:
                    message.currentCaid = reader.string();
                    break;
                case /* string cached_caid */ 7:
                    message.cachedCaid = reader.string();
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
        /* string appid = 1; */
        if (message.appid !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.appid);
        /* string deviceid = 2; */
        if (message.deviceid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.deviceid);
        /* string mac = 3; */
        if (message.mac !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.mac);
        /* string rydevicetype = 4; */
        if (message.rydevicetype !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.rydevicetype);
        /* string client_tz = 5; */
        if (message.clientTz !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.clientTz);
        /* string current_caid = 6; */
        if (message.currentCaid !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.currentCaid);
        /* string cached_caid = 7; */
        if (message.cachedCaid !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.cachedCaid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TrackingIOInfo
 */
exports.TrackingIOInfo = new TrackingIOInfo$Type();
