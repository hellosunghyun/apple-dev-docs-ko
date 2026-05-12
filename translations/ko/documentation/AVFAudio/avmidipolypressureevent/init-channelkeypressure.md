---
source_path: "documentation/AVFAudio/avmidipolypressureevent/init-channelkeypressure.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmidipolypressureevent/init-channelkeypressure"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initchannelkeypressure:0000:0001">init(channel:key:pressure:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initchannelkeypressure:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initchannelkeypressure:0002:0001">채널, MIDI 키 번호 및 키 압력 값으로 이벤트를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initchannelkeypressure:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initchannelkeypressure:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initchannelkeypressure:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initchannelkeypressure:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initchannelkeypressure:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initchannelkeypressure:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initchannelkeypressure:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(channel: UInt32, key: UInt32, pressure: UInt32)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>channel</code>: 메시지의 MIDI 채널입니다. 값은 <code>0</code>에서 <code>15</code> 사이입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>key</code>: 압력을 적용할 MIDI 키 번호입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>pressure</code>: 폴리 압력 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmidipolypressureevent/init(channel:key:pressure:">View on Apple Developer</a>)*</span>
