---
source_path: "documentation/AVFoundation/averror-swift.struct/incorrectlyconfigured.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/averror-swift.struct/incorrectlyconfigured"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:incorrectlyconfigured:0000:0001">incorrectlyConfigured</span>

<span class="ko-segment" data-segment-id="seg:paragraph:incorrectlyconfigured:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:incorrectlyconfigured:0002:0001">요청한 작업에 대해 시스템 구성이 잘못되었습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:incorrectlyconfigured:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:incorrectlyconfigured:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var incorrectlyConfigured: AVError.Code { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템은 잘못 구성된 작업을 수행하려고 할 때 이 오류를 발생시킵니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예를 들어 HTTP Live Streaming은 한 번에 비디오와 오디오 트랙을 각각 하나씩만 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">스트리밍용 조각화 MPEG-4 에셋을 생성하기 위해 <a href="avassetwriter.md">@@TOKEN_0@@</a>를 사용하는 경우, 비디오 및 오디오 <a href="avassetwriterinput.md">@@TOKEN_1@@</a>을 더 이상 하나 이상 추가하면 쓰기 시작 시 오류가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="averror-swift.struct/code.md">AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">프레임워크 작업이 생성할 수 있는 오류를 정의하는 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/id3metadataattachedpicture.md">static var airPlayControllerRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">AirPlay 컨트롤러가 작동하려면 인터넷 연결이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/id3metadataaudioencryption.md">static var airPlayReceiverRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AirPlay 수신기가 작동하려면 인터넷 연결이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/id3metadataaudioseekpointindex.md">static var airPlayReceiverTemporarilyUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">AirPlay 수신기를 일시적으로 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/id3metadataband.md">static var applicationIsNotAuthorizedToUseDevice: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">사용자가 이 앱의 미디어 캡처 권한을 거부했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/id3metadatabeatsperminute.md">static var applicationIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 앱은 미디어 재생 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/id3metadatacomments.md">static var autoWhiteBalanceNotLocked: AVError.Code</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0002"><a href="averror-swift.struct/compositiontracksegmentsnotcontiguous.md">static var compositionTrackSegmentsNotContiguous: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">구성에서 소스 미디어에 간격이 있어 추가할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/id3metadatacommercial.md">static var contentIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">사용자가 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/id3metadatacommercialinformation.md">static var contentIsProtected: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 앱은 미디어를 열 수 있는 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="averror-swift.struct/contentisunavailable.md">static var contentIsUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">캡처한 콘텐츠를 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="averror-swift.struct/contentkeyrequestcancelled.md">static var contentKeyRequestCancelled: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱이 콘텐츠 키를 검색하는 요청을 취소했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="averror-swift.struct/contentnotupdated.md">static var contentNotUpdated: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">시스템이 캡처한 콘텐츠를 업데이트하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="averror-swift.struct/createcontentkeyrequestfailed.md">static var createContentKeyRequestFailed: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">앱이 콘텐츠 키 요청을 생성하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="averror-swift.struct/decodefailed.md">static var decodeFailed: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">시스템이 미디어를 디코드하지 못했습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfoundation/averror-swift.struct/incorrectlyconfigured">View on Apple Developer</a>*</span>
