---
source_path: "documentation/AVFAudio/avaudioformat/init-commonformatsamplerateinterleavedchannellayout.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioformat/init-commonformatsamplerateinterleavedchannellayout"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initcommonformatsamplerateinterleavedchannellayout:0000:0001">init(commonFormat:sampleRate:interleaved:channelLayout:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcommonformatsamplerateinterleavedchannellayout:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcommonformatsamplerateinterleavedchannellayout:0002:0001">지정한 오디오 형식, 샘플링 레이트, 인터리브 상태 및 채널 레이아웃으로 오디오 포맷 인스턴스를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcommonformatsamplerateinterleavedchannellayout:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcommonformatsamplerateinterleavedchannellayout:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(commonFormat format: AVAudioCommonFormat, sampleRate: Double, interleaved: Bool, channelLayout layout: AVAudioChannelLayout)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새 <code>AVAudioFormat</code> 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">가능한 <code>format</code> 값에 대한 내용은 <a href="avaudiocommonformat.md">@@TOKEN_1@@</a>에 설명되어 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>format</code>: 오디오 형식입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>sampleRate</code>: 샘플링 레이트(헤르츠)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>interleaved</code>: <code>format</code>이 인터리브 상태인지 나타내는 부울 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>layout</code>: 채널 레이아웃이며 <code>nil</code>이 아니어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioformat/samplerate.md">var sampleRate: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 포맷의 샘플링 레이트(헤르츠)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioformat/isinterleaved.md">var isInterleaved: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">샘플이 하나의 스트림으로 혼합되는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioformat/commonformat.md">var commonFormat: AVAudioCommonFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">공통 형식 식별자 인스턴스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudioformat/channellayout.md">var channelLayout: AVAudioChannelLayout?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">기본 오디오 채널 레이아웃입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudioformat/init(standardformatwithsamplerate:channellayout:">init(standardFormatWithSampleRate: Double, channelLayout: AVAudioChannelLayout)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정한 샘플링 레이트와 채널 레이아웃으로 디인터리브된 float 형식의 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudioformat/init(standardformatwithsamplerate:channels:">init?(standardFormatWithSampleRate: Double, channels: AVAudioChannelCount)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">지정한 샘플링 레이트와 채널 수로 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudioformat/init(commonformat:samplerate:channels:interleaved:">init?(commonFormat: AVAudioCommonFormat, sampleRate: Double, channels: AVAudioChannelCount, interleaved: Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[init?(settings: [String : Any])](avaudioformat/init(settings:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정된 설정 딕셔너리를 사용해 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudioformat/init(streamdescription:">init?(streamDescription: UnsafePointer&lt;AudioStreamBasicDescription&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">스트림 설명에서 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudioformat/init(streamdescription:channellayout:">init?(streamDescription: UnsafePointer&lt;AudioStreamBasicDescription&gt;, channelLayout: AVAudioChannelLayout?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">스트림 설명과 채널 레이아웃을 사용해 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudioformat/init(cmaudioformatdescription:">init(cmAudioFormatDescription: CMAudioFormatDescription)</a>-8rdfj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Core Media 오디오 포맷 설명에서 오디오 포맷 인스턴스를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioformat/init(commonformat:samplerate:interleaved:channellayout:">Apple Developer에서 보기</a>)*</span>
