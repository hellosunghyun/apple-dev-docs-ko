---
source_path: "documentation/ARKit/objecttrackingprovider/error.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/objecttrackingprovider/error"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:objecttrackingprovidererror:0000:0001">ObjectTrackingProvider.Error</span>

<span class="ko-segment" data-segment-id="seg:paragraph:objecttrackingprovidererror:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:objecttrackingprovidererror:0002:0001">개체 추적 오류를 나타내는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:objecttrackingprovidererror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:objecttrackingprovidererror:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Error
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:describing-an-error:0008:0001">오류 설명</span>

- <span class="ko-segment" data-segment-id="seg:list:describing-an-error:0009:0001"><a href="objecttrackingprovider/error/code-swift.property.md">var code: ObjectTrackingProvider.Error.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:describing-an-error:0010:0001">오류 코드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:describing-an-error:0011:0001"><a href="objecttrackingprovider/error/code-swift.enum.md">ObjectTrackingProvider.Error.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:describing-an-error:0012:0001">개체 추적 provider 오류 코드의 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:describing-an-error:0013:0001"><a href="objecttrackingprovider/error/errordescription.md">var errorDescription: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:describing-an-error:0014:0001">오류를 설명하는 현지화 메시지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:describing-an-error:0015:0001"><a href="objecttrackingprovider/error/failurereason.md">var failureReason: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:describing-an-error:0016:0001">실패 이유를 설명하는 현지화된 메시지입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-an-error:0017:0001">오류 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-an-error:0018:0001"><a href="objecttrackingprovider/error/bundle.md">let bundle: Bundle?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-an-error:0019:0001">소스가 번들인 경우 로드에 실패한 모델의 번들입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-an-error:0020:0001"><a href="objecttrackingprovider/error/name.md">let name: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-an-error:0021:0001">소스가 번들인 경우 로드에 실패한 모델의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-an-error:0022:0001"><a href="objecttrackingprovider/error/recoverysuggestion.md">var recoverySuggestion: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-an-error:0023:0001">실패에서 복구하는 방법을 설명하는 현지화된 메시지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-an-error:0024:0001"><a href="objecttrackingprovider/error/url.md">let url: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-an-error:0025:0001">소스가 URL인 경우 로드에 실패한 모델의 URL입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0026:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0027:0001"><a href="objecttrackingprovider/error/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0028:0001">오류의 텍스트 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0029:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0030:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0002"><a href="../Swift/Error.md">Error</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0003"><a href="../Foundation/LocalizedError.md">LocalizedError</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0032:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="objecttrackingprovider/state.md">var state: DataProviderState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">개체 추적 provider의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001">[var allAnchors: [ObjectAnchor]](objecttrackingprovider/allanchors.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">개체 추적 provider가 추적 중인 모든 object anchor의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="objecttrackingprovider/anchorupdates.md">var anchorUpdates: AnchorUpdateSequence&lt;ObjectAnchor&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">프레임워크가 업데이트하는 anchor의 비동기 시퀀스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="objecttrackingprovider/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">이 개체 추적 provider의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/objecttrackingprovider/error">View on Apple Developer</a>*</span>
