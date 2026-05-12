---
source_path: "documentation/AVFoundation/averror-swift.struct/sessionwasinterrupted.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/averror-swift.struct/sessionwasinterrupted"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessionwasinterrupted:0000:0001">sessionWasInterrupted</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwasinterrupted:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwasinterrupted:0002:0001">시스템이 오디오 세션을 중단했기 때문에 녹음이 중지되었습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwasinterrupted:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var sessionWasInterrupted: AVError.Code { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="averror-swift.struct/code.md">AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">프레임워크 작업이 생성할 수 있는 오류를 정의하는 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadataidentifier/quicktimeuserdataarranger.md">static var airPlayControllerRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">AirPlay 컨트롤러가 동작하려면 인터넷 연결이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/quicktimeuserdataartist.md">static var airPlayReceiverRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">AirPlay 수신기가 동작하려면 인터넷 연결이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/quicktimeuserdataauthor.md">static var airPlayReceiverTemporarilyUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AirPlay 수신기가 일시적으로 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/quicktimeuserdatachapter.md">static var applicationIsNotAuthorizedToUseDevice: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사용자가 이 앱의 미디어 캡처 권한을 거부했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/quicktimeuserdatacomment.md">static var applicationIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 앱은 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/quicktimeuserdatacomposer.md">static var autoWhiteBalanceNotLocked: AVError.Code</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="averror-swift.struct/compositiontracksegmentsnotcontiguous.md">static var compositionTrackSegmentsNotContiguous: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">소스 미디어에 간격이 있어 합성이 이를 추가할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="averror-swift.struct/contentisnotauthorized.md">static var contentIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">사용자가 미디어 재생에 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="averror-swift.struct/contentisprotected.md">static var contentIsProtected: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">이 앱은 미디어를 열 수 있는 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="averror-swift.struct/contentisunavailable.md">static var contentIsUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">캡처된 콘텐츠를 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="averror-swift.struct/contentkeyrequestcancelled.md">static var contentKeyRequestCancelled: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱이 콘텐츠 키 검색 요청을 취소했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="averror-swift.struct/contentnotupdated.md">static var contentNotUpdated: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">시스템이 캡처된 콘텐츠를 업데이트하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="averror-swift.struct/createcontentkeyrequestfailed.md">static var createContentKeyRequestFailed: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">앱이 콘텐츠 키 요청을 생성하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="averror-swift.struct/decodefailed.md">static var decodeFailed: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">시스템이 미디어를 디코딩하지 못했습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfoundation/averror-swift.struct/sessionwasinterrupted">View on Apple Developer</a>*</span>
