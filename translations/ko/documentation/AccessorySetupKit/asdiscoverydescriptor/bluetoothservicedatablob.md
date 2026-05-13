---
source_path: "documentation/AccessorySetupKit/asdiscoverydescriptor/bluetoothservicedatablob.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accessorysetupkit/asdiscoverydescriptor/bluetoothservicedatablob"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bluetoothservicedatablob:0000:0001">bluetoothServiceDataBlob</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothservicedatablob:0001:0001">**Framework**: AccessorySetupKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothservicedatablob:0002:0001">액세서리의 Bluetooth 서비스 데이터와 일치하는 바이트 버퍼입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothservicedatablob:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bluetoothservicedatablob:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothservicedatablob:0004:0002">iPadOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var bluetoothServiceDataBlob: Data? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="discovering-and-configuring-accessories.md">Discovering and configuring accessories</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="asdiscoverydescriptor/bluetoothcompanyidentifier.md">var bluetoothCompanyIdentifier: ASBluetoothCompanyIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">액세서리의 16비트 Bluetooth Company Identifier입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="asbluetoothcompanyidentifier.md">struct ASBluetoothCompanyIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Bluetooth 액세서리 제공자를 식별하는 데 사용되는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="asbluetoothcompanyidentifier.md">struct ASBluetoothCompanyIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Bluetooth 액세서리 제공자를 식별하는 데 사용되는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="asdiscoverydescriptor/bluetoothmanufacturerdatablob.md">var bluetoothManufacturerDataBlob: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">액세서리의 Bluetooth 제조사 데이터와 일치하는 바이트 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="asdiscoverydescriptor/bluetoothmanufacturerdatamask.md">var bluetoothManufacturerDataMask: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">액세서리의 Bluetooth 제조사 데이터 마스크입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="asdiscoverydescriptor/bluetoothservicedatamask.md">var bluetoothServiceDataMask: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">액세서리의 Bluetooth 서비스 데이터 마스크입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="asdiscoverydescriptor/bluetoothnamesubstring.md">var bluetoothNameSubstring: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">액세서리의 over-the-air Bluetooth 이름 하위 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="asdiscoverydescriptor/bluetoothnamesubstringcompareoptions.md">var bluetoothNameSubstringCompareOptions: NSString.CompareOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">액세서리의 over-the-air Bluetooth 이름 하위 문자열 비교 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="asdiscoverydescriptor/bluetoothserviceuuid.md">var bluetoothServiceUUID: CBUUID?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">액세서리의 Bluetooth service UUID입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="asdiscoverydescriptor/bluetoothrange.md">var bluetoothRange: ASDiscoveryDescriptor.Range</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">특정 Bluetooth 범위 내에서 액세서리를 검색하도록 세션에 지시하는 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="asdiscoverydescriptor/range.md">ASDiscoveryDescriptor.Range</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">액세서리를 검색할 Bluetooth 범위입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/accessorysetupkit/asdiscoverydescriptor/bluetoothservicedatablob">View on Apple Developer</a>*</span>
