---
source_path: "documentation/AVFAudio/avaudioplayer/init-contentsof.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayer/init-contentsof"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initcontentsof:0000:0001">init(contentsOf:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcontentsof:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcontentsof:0002:0001">파일에서 오디오를 재생할 플레이어를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcontentsof:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0001">iOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0002">iPadOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontentsof:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(contentsOf url: URL) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A new audio player instance, or <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if an error occurs.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The audio data must be in a format that Core Audio supports.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>url</code>: A URL that identifies the local audio file to play.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioplayer/init(contentsof:filetypehint:">init(contentsOf: URL, fileTypeHint: String?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Creates a player to play audio from a file of a particular type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioplayer/init(data:">init(data: Data) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Creates a player to play in-memory audio data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioplayer/init(data:filetypehint:">init(data: Data, fileTypeHint: String?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Creates a player to play in-memory audio data of a particular type.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:">View on Apple Developer</a>)*</span>
