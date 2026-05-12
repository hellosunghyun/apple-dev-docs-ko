---
source_path: "documentation/AVFAudio/avmusictrack/cutevents-in.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmusictrack/cutevents-in"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cuteventsin:0000:0001">cutEvents(in:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cuteventsin:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cuteventsin:0002:0001">음악 트랙에서 비트 범위의 모든 이벤트를 잘라냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cuteventsin:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cuteventsin:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cuteventsin:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cuteventsin:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cuteventsin:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cuteventsin:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cuteventsin:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cutEvents(in range: AVBeatRange)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You can set this property to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> for a video connection if <a href="avcaptureconnection/iscameraintrinsicmatrixdeliverysupported.md">@@TOKEN_1@@</a> is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>, and only before calling the <a href="avcapturesession.md">@@TOKEN_3@@</a> <a href="avcapturesession/startrunning(">@@TOKEN_4@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>range</code>: 비트 범위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmusictrack/copyevents(in:from:insertat:">func copyEvents(in: AVBeatRange, from: AVMusicTrack, insertAt: AVMusicTimeStamp)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">소스 트랙의 이벤트를 복사하여 현재 음악 트랙에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmusictrack/copyandmergeevents(in:from:mergeat:">func copyAndMergeEvents(in: AVBeatRange, from: AVMusicTrack, mergeAt: AVMusicTimeStamp)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">소스 트랙의 이벤트를 복사하여 현재 음악 트랙에 병합합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmusictrack/cutevents(in:">Apple Developer에서 보기</a>)*</span>
