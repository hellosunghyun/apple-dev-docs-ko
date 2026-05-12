---
source_path: "documentation/ARKit/stereopropertiesprovider.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/stereopropertiesprovider"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stereopropertiesprovider:0000:0001">StereoPropertiesProvider</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereopropertiesprovider:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereopropertiesprovider:0002:0001">StereoPropertiesProvider는 기기의 최신 viewpoint 속성을 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereopropertiesprovider:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stereopropertiesprovider:0004:0001">visionOS 2.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
final class StereoPropertiesProvider
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="stereopropertiesprovider/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">StereoPropertiesProvider를 초기화합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0011:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0012:0001"><a href="stereopropertiesprovider/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0013:0001">이 stereo properties provider의 텍스트 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="stereopropertiesprovider/latestviewpointproperties.md">var latestViewpointProperties: ViewpointProperties?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">사용 가능한 경우 최신 viewpoint 속성을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="stereopropertiesprovider/state.md">var state: DataProviderState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">이 stereo properties provider의 상태입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-properties:0018:0001">타입 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0019:0001"><a href="stereopropertiesprovider/issupported.md">static var isSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0020:0001">이 기기가 stereo properties provider를 지원하는지 여부를 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0021:0001">[static var requiredAuthorizations: [ARKitSession.AuthorizationType]](stereopropertiesprovider/requiredauthorizations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0022:0001">stereo properties provider에 필요한 권한 부여 유형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="dataprovider.md">DataProvider</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="viewpointproperties.md">struct ViewpointProperties</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">ViewpointProperties는 특정 시점의 렌더 카메라 변환을 기록한 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/arkit/stereopropertiesprovider">View on Apple Developer</a>*</span>
