---
source_path: "documentation/AVFAudio/avaudioplayer/init-data.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayer/init-data"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initdata:0000:0001">init(data:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdata:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdata:0002:0001">Creates a player to play in-memory audio data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0001">iOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0002">iPadOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdata:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(data: Data) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A new audio player instance, or <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if an error occurs.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">오디오 데이터는 Core Audio가 지원하는 형식이어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>data</code>: 재생할 오디오 데이터가 포함된 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioplayer/init(contentsof:">init(contentsOf: URL) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">파일에서 오디오를 재생하는 플레이어를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioplayer/init(contentsof:filetypehint:">init(contentsOf: URL, fileTypeHint: String?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">특정 형식의 파일에서 오디오를 재생하는 플레이어를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioplayer/init(data:filetypehint:">init(data: Data, fileTypeHint: String?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">특정 형식의 메모리 내 오디오 데이터를 재생하는 플레이어를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(data:">View on Apple Developer</a>)*</span>
