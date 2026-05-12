---
source_path: "documentation/ARKit/cameraregionprovider.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/cameraregionprovider"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cameraregionprovider:0000:0001">CameraRegionProvider</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameraregionprovider:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameraregionprovider:0002:0001">카메라 영역 제공자입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:cameraregionprovider:0002:0002">CameraRegionProvider를 사용하려면 엔터프라이즈 라이선스가 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:cameraregionprovider:0002:0003">이 라이선스가 없으면 provider는 데이터를 제공하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:cameraregionprovider:0002:0004">앱에는 다음 엔타이틀먼트가 포함되어야 합니다: <code>com.apple.developer.arkit.camera-region.allow</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameraregionprovider:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cameraregionprovider:0004:0001">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
final class CameraRegionProvider
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:structures:0008:0001">Structures</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0009:0001"><a href="cameraregionprovider/error.md">CameraRegionProvider.Error</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0010:0001">카메라 영역 오류입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0011:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0012:0001"><a href="cameraregionprovider/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0013:0001">카메라 영역 provider를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0014:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0001"><a href="cameraregionprovider/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0016:0001">이 카메라 영역 provider의 텍스트 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0017:0001"><a href="cameraregionprovider/state.md">var state: DataProviderState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0018:0001">이 카메라 영역 provider의 상태입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-methods:0019:0001">인스턴스 메서드</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0020:0001"><a href="cameraregionprovider/addanchor(_:">func addAnchor(CameraRegionAnchor) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-methods:0021:0001">카메라 영역 anchor를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0022:0001"><a href="cameraregionprovider/anchorupdates(forid:">func anchorUpdates(forID: UUID) -&gt; AnchorUpdateSequence&lt;CameraRegionAnchor&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-methods:0023:0001">특정 anchor의 anchor 업데이트에 대한 비동기 시퀀스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0024:0001"><a href="cameraregionprovider/removeanchor(_:">func removeAnchor(CameraRegionAnchor) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-methods:0025:0001">카메라 영역 anchor를 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0026:0001"><a href="cameraregionprovider/removeanchor(forid:">func removeAnchor(forID: UUID) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-methods:0027:0001">지정된 ID를 가진 anchor를 카메라 영역에서 제거합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-properties:0028:0001">타입 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0029:0001"><a href="cameraregionprovider/issupported.md">static var isSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0030:0001">이 기기가 카메라 영역 provider를 지원하는지 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0031:0001">[static var requiredAuthorizations: [ARKitSession.AuthorizationType]](cameraregionprovider/requiredauthorizations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0032:0001">카메라 영역 provider에 필요한 권한 부여 유형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0033:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0034:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0002"><a href="dataprovider.md">DataProvider</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0003"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0004"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cameraregionanchor.md">struct CameraRegionAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">카메라 스트림을 캡처할 공간의 영역을 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/arkit/cameraregionprovider">View on Apple Developer</a>*</span>
