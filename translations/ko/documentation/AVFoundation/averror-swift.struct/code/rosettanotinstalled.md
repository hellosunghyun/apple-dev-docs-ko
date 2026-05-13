---
source_path: "documentation/AVFoundation/averror-swift.struct/code/rosettanotinstalled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/averror-swift.struct/code/rosettanotinstalled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:averrorcoderosettanotinstalled:0000:0001">AVError.Code.rosettaNotInstalled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:averrorcoderosettanotinstalled:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:averrorcoderosettanotinstalled:0002:0001">The system doesn’t have Rosetta installed and can’t perform the requested operation.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:averrorcoderosettanotinstalled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:averrorcoderosettanotinstalled:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case rosettaNotInstalled
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Apple Silicon devices can use Intel-only codecs and file parsers, but only if you’ve installed Rosetta on the host system.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="averror-swift.struct/code/airplaycontrollerrequiresinternet.md">AVError.Code.airPlayControllerRequiresInternet</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The AirPlay controller requires an internet connection to function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="averror-swift.struct/code/airplayreceiverrequiresinternet.md">AVError.Code.airPlayReceiverRequiresInternet</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">AirPlay 수신자는 작동하려면 인터넷 연결이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="averror-swift.struct/code/airplayreceivertemporarilyunavailable.md">AVError.Code.airPlayReceiverTemporarilyUnavailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AirPlay 수신자가 일시적으로 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="averror-swift.struct/code/applicationisnotauthorized.md">AVError.Code.applicationIsNotAuthorized</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">앱은 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="averror-swift.struct/code/applicationisnotauthorizedtousedevice.md">AVError.Code.applicationIsNotAuthorizedToUseDevice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">사용자가 이 앱의 미디어 캡처 권한을 거부했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="averror-swift.struct/code/autowhitebalancenotlocked.md">AVError.Code.autoWhiteBalanceNotLocked</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="averror-swift.struct/code/compositiontracksegmentsnotcontiguous.md">AVError.Code.compositionTrackSegmentsNotContiguous</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">컴포지션에 갭이 포함되어 있어 소스 미디어를 추가할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="averror-swift.struct/code/contentisnotauthorized.md">AVError.Code.contentIsNotAuthorized</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">사용자는 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="averror-swift.struct/code/contentisprotected.md">AVError.Code.contentIsProtected</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">앱은 미디어를 열 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="averror-swift.struct/code/contentisunavailable.md">AVError.Code.contentIsUnavailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">캡처된 콘텐츠를 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="averror-swift.struct/code/contentkeyrequestcancelled.md">AVError.Code.contentKeyRequestCancelled</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱이 콘텐츠 키 검색 요청을 취소했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="averror-swift.struct/code/contentnotupdated.md">AVError.Code.contentNotUpdated</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">시스템에서 캡처된 콘텐츠를 업데이트하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="averror-swift.struct/code/createcontentkeyrequestfailed.md">AVError.Code.createContentKeyRequestFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">앱이 콘텐츠 키 요청을 만들 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="averror-swift.struct/code/decodefailed.md">AVError.Code.decodeFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">시스템이 미디어 디코딩에 실패했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="averror-swift.struct/code/decodernotfound.md">AVError.Code.decoderNotFound</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">시스템이 이 미디어에 적합한 디코더를 찾을 수 없습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfoundation/averror-swift.struct/code/rosettanotinstalled">View on Apple Developer</a>*</span>
