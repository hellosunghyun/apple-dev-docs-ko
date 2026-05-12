---
source_path: "documentation/AVFAudio/avaudiofile/init-forwritingsettings.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiofile/init-forwritingsettings"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initforwritingsettings:0000:0001">init(forWriting:settings:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initforwritingsettings:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initforwritingsettings:0002:0001">지정한 설정으로 파일을 쓰기 위해 엽니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initforwritingsettings:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initforwritingsettings:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(forWriting fileURL: URL, settings: [String : Any]) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">쓰기용 새로운 <code>AVAudioFile</code> 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 <code>fileURL</code>의 파일 확장자를 기반으로 생성할 파일 형식을 추론하고, 지정된 URL에 파일이 있으면 덮어씁니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 파일은 표준 형식 <a href="avaudiocommonformat/pcmformatfloat32.md">@@TOKEN_0@@</a>을 사용해 쓰기 모드로 열립니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><code>settings</code> 매개변수에 대한 자세한 내용은 <a href="avaudiorecorder.md">@@TOKEN_1@@</a> 클래스의 <a href="avaudiorecorder/settings.md">@@TOKEN_2@@</a> 속성을 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>fileURL</code>: 쓰기용으로 생성할 파일의 경로입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>settings</code>: 생성할 파일의 형식입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avaudiofile/url.md">var url: URL</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">오디오 파일의 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avaudiofile/init(forreading:">init(forReading: URL) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">표준 비인터리브(deinterleaved) 부동소수점 형식으로 파일을 읽기 위해 엽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avaudiofile/init(forreading:commonformat:interleaved:">init(forReading: URL, commonFormat: AVAudioCommonFormat, interleaved: Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">지정한 처리 형식으로 파일을 읽기 위해 엽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001">[init(forWriting: URL, settings: [String : Any], commonFormat: AVAudioCommonFormat, interleaved: Bool) throws](avaudiofile/init(forwriting:settings:commonformat:interleaved:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">지정한 처리 형식과 설정으로 파일을 쓰기 위해 엽니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiofile/init(forwriting:settings:">View on Apple Developer</a>)*</span>
