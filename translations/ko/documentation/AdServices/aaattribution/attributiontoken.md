---
source_path: "documentation/AdServices/aaattribution/attributiontoken.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/adservices/aaattribution/attributiontoken"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:attributiontoken:0000:0001">attributionToken()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attributiontoken:0001:0001">**Framework**: AdServices **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attributiontoken:0002:0001">토큰을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attributiontoken:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:attributiontoken:0004:0001">iOS 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributiontoken:0004:0002">iPadOS 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributiontoken:0004:0003">Mac Catalyst 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributiontoken:0004:0004">macOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributiontoken:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func attributionToken() throws -> String
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="changelog.md">Changelog</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">프레임워크가 반환하는 토큰은 Base64로 인코딩된 문자열이며 TTL이 24시간입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 토큰은 모바일 측정 공급자(MMP)에 제공할 수 있으며, 앱 개발자는 이 토큰을 사용해 <code>POST</code> API 호출로 24시간 TTL 창 내에서 어트리뷰션 레코드를 가져올 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">요청 본문에는 토큰을 하나만 사용하고, 헤더에는 <code>text/plain</code> content-type을 사용합니다. 다음 예시와 같습니다:\n``<code>other\nPOST https://api-adservices.apple.com/api/v1/\n--header 'Content-Type: text/plain' \\n--data-raw\n\nG9i5hC8lQJeGOfmS+MFycll/025oJEjtpZ+rs4AUkDEJh52fT8RrjwIR/ h+2JOpXz4MRdmtcemL8WTTHfNN52tjqjbWupke40AAAAVADAAAAvQAAAIAg QF1+XF4Tl2IZ7Bw/M6ufUHt+UcIhuBeJT8YenB2v36bnZKEjvq/ IH8rqXkRELTHdyiqOYtpy837+UjF/NjE6t1/ l7sIn71b0t3FEXJd8QOtl3Bi6iQyJgGeN8w8X0MK1PDqz9nLJtRD/ wl+p112qR2YrMDyyKnwNrbfRhnGB9AAAAB7wAXlwNHelWf5RT2bzSJcGflq ELMCGoDEHIl7jF6kAAACfAb9ylY8ffdbTlyJODQYQ/ 6V9qbaBAAAAhgUBW39MQI1A0SZgNmZFz4KPaF94BxBzd4rDkjr/ eSeuaXWCmEW3ZhBzE/MOM17hAPBVlDhTPcZ/2ybr3WYIkfb+AAg/ 7jxGpDXgTtco3fzTytnZpEaI5SenXHALIexQAUTBsfBW2HCMQuTRo+7anoW kf69656ZAWcSc3DEQ1CAkUSKO9X7iAAABBEQQBQA=\n</code>``</span>

```other
POST https://api-adservices.apple.com/api/v1/
--header 'Content-Type: text/plain' \
--data-raw

G9i5hC8lQJeGOfmS+MFycll/025oJEjtpZ+rs4AUkDEJh52fT8RrjwIR/ h+2JOpXz4MRdmtcemL8WTTHfNN52tjqjbWupke40AAAAVADAAAAvQAAAIAg QF1+XF4Tl2IZ7Bw/M6ufUHt+UcIhuBeJT8YenB2v36bnZKEjvq/ IH8rqXkRELTHdyiqOYtpy837+UjF/NjE6t1/ l7sIn71b0t3FEXJd8QOtl3Bi6iQyJgGeN8w8X0MK1PDqz9nLJtRD/ wl+p112qR2YrMDyyKnwNrbfRhnGB9AAAAB7wAXlwNHelWf5RT2bzSJcGflq ELMCGoDEHIl7jF6kAAACfAb9ylY8ffdbTlyJODQYQ/ 6V9qbaBAAAAhgUBW39MQI1A0SZgNmZFz4KPaF94BxBzd4rDkjr/ eSeuaXWCmEW3ZhBzE/MOM17hAPBVlDhTPcZ/2ybr3WYIkfb+AAg/ 7jxGpDXgTtco3fzTytnZpEaI5SenXHALIexQAUTBsfBW2HCMQuTRo+7anoW kf69656ZAWcSc3DEQ1CAkUSKO9X7iAAABBEQQBQA=
```

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: 유효한 토큰을 받은 직후 API 호출을 너무 빨리 수행하면 <code>404</code> 응답이 발생할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">재시도는 5초 간격으로 최대 3회까지 수행하는 것이 모범 사례입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">오류 코드에 대한 자세한 내용은 <a href="aaattributionerror.md">@@TOKEN_0@@</a>에 설명되어 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:response-codes:0014:0001">응답 코드</span>

| <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0001">**Response**</span> | <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0002">**Description**</span> |
| --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0003">200</span> | <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0004">성공입니다. API가 일치하는 attribution 레코드를 찾으면 페이로드가 <code>attribution=true</code>를 반환합니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>API가 일치하는 attribution 레코드를 찾지 못하면 페이로드가 <code>attribution=false</code>를 반환합니다. 이 경우 <code>200</code> <code>OK</code> 응답은 데이터 요청 수신 확인입니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0005">400</span> | <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0006">토큰이 유효하지 않습니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0007">404</span> | <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0008">찾을 수 없습니다. API가 요청한 attribution 레코드를 검색할 수 없습니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>토큰의 TTL은 24시간입니다. <code>POST</code> API 호출이 24시간을 초과하면 <code>404</code> 응답이 반환됩니다. 토큰이 유효한 경우, 재시도는 5초 간격으로 최대 3회 수행하는 것이 모범 사례입니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0009">500</span> | <span class="ko-segment" data-segment-id="seg:table:response-codes:0015:0010">Apple Ads 서버가 일시적으로 중단되었거나 접근할 수 없습니다. 요청이 유효할 수 있지만 나중에 다시 시도해야 합니다.</span> |

##### <span class="ko-segment" data-segment-id="seg:heading:attribution-payloads:0016:0001">어트리뷰션 페이로드</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attribution-payloads:0017:0001">API는 두 가지 유형의 attribution 레코드를 반환합니다. 하나는 표준 응답, 다른 하나는 상세 응답입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attribution-payloads:0018:0001">iOS 14 이상에서는 기기 수준 설정인 Allow Apps to Request to Track (AAtRtT)가 attribution 서버가 반환하는 응답과 attribution 페이로드에서 사용할 수 있는 세부 정보를 모두 결정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:attribution-payloads:0018:0002">AAtRtT 설정을 통해 사용자는 앱이 사용자 동의 요청을 통해 어트리뷰션 및 사용자 또는 기기 추적을 위해 앱 관련 데이터에 접근하도록 허용할지 여부를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:attribution-payloads:0018:0003">다음 표는 추적 상호작용의 조합과 예상되는 attribution 페이로드 응답을 보여줍니다.</span>

| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0001">**iOS 14 이상에서 앱 추적 요청 허용 설정 (Allow Apps to Request to Track)**</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0002">**앱별 추적 동의 상태**</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0003">**어트리뷰션 페이로드 응답**</span> |
| --- | --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0004">On</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0005">알 수 없음 !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/notDetermined">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0006">Standard</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0007">On</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0008">거부 또는 제한됨 !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/denied">@@TOKEN_0@@</a> / !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/restricted">@@TOKEN_1@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0009">Standard</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0010">On</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0011">승인됨 !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/authorized">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0012">Detailed</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0013">Off</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0014">알 수 없음 !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/notDetermined">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0015">Standard</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0016">Off</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0017">거부 또는 제한됨 !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/denied">@@TOKEN_0@@</a> / !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/restricted">@@TOKEN_1@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0018">Standard</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0019">Off</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0020">승인됨 !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><a href="https://developer.apple.com/documentation/AppTrackingTransparency/ATTrackingManager/AuthorizationStatus/authorized">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payloads:0019:0021">Detailed</span> |

<span class="ko-segment" data-segment-id="seg:paragraph:attribution-payloads:0020:0001">attribution 레코드는 iOS 14 이상이 실행되는 기기의 Apple Ads 캠페인 및 앱 다운로드에 해당하는 키-값 쌍으로 구성된 데이터 딕셔너리입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:attribution-payloads:0020:0002">자세한 캠페인 메타데이터를 검토하려면 <a href="https://developer.apple.com/documentation/apple_ads">@@TOKEN_0@@</a> 또는 <a href="https://developer.apple.comhttps://ads.apple.com/advanced/">@@TOKEN_1@@</a>에서 보고서를 실행합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:attribution-payloads:0021:0001">**참고**: 페이로드 응답에서 테스트 데이터가 수신되면 앱이 개발자 모드가 아닌지 확인합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:attribution-payloads:0021:0002">개발자 모드가 켜져 있으면 AdServices가 테스트 페이로드를 반환합니다:</span>

```json
{
  "attribution": true,
  "orgId": 1234567890,
  "campaignId": 1234567890,
  "conversionType": "Download",
  "clickDate": "2020-04-08T17:17Z",
  "claimType": "Click",
  "adGroupId": 1234567890,
  "countryOrRegion": "US",
  "keywordId": 123222,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

###### <span class="ko-segment" data-segment-id="seg:heading:tap-through-payload-examples:0023:0001">탭 스루 페이로드 예시</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tap-through-payload-examples:0024:0001">탭 스루 어트리뷰션에 대한 상세 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "Download",
  "clickDate": "2024-10-08T17:17Z",
  "claimType": "Click",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:tap-through-payload-examples:0026:0001">탭 스루 어트리뷰션에 대한 표준 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "Download",
  "claimType": "Click",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

###### <span class="ko-segment" data-segment-id="seg:heading:view-through-payload-examples:0028:0001">뷰 스루 페이로드 예시</span>

<span class="ko-segment" data-segment-id="seg:paragraph:view-through-payload-examples:0029:0001">뷰 스루 어트리뷰션에 대한 상세 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "Download",
  "impressionDate": "2024-10-08T17:17Z",
  "claimType": "Impression",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:view-through-payload-examples:0031:0001">뷰 스루 어트리뷰션에 대한 표준 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "Download",
  "claimType": "Impression",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

###### <span class="ko-segment" data-segment-id="seg:heading:pre-order-payload-examples:0033:0001">사전 주문 페이로드 예시</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pre-order-payload-examples:0034:0001">탭 스루 사전 주문 어트리뷰션에 대한 상세 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "PreOrder",
  "clickDate": "2020-04-08T17:17Z",
  "claimType": "Click",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:pre-order-payload-examples:0036:0001">탭 스루 사전 주문 어트리뷰션에 대한 표준 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "PreOrder",
  "claimType": "Click",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:pre-order-payload-examples:0038:0001">뷰 스루 사전 주문 어트리뷰션에 대한 상세 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "PreOrder",
  "impressionDate": "2020-04-08T17:17Z",
  "claimType": "Impression",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:pre-order-payload-examples:0040:0001">뷰 스루 사전 주문 어트리뷰션에 대한 표준 페이로드는 다음과 같습니다:</span>

```json
{
  "attribution": true,
  "orgId": 40669820,
  "campaignId": 542370539,
  "conversionType": "PreOrder",
  "claimType": "Impression",
  "adGroupId": 542317095,
  "countryOrRegion": "US",
  "keywordId": 87675432,
  "adId": 542317136,
  "supplyPlacement": "APPSTORE_SEARCH_RESULTS"
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:attribution-payload-descriptions:0042:0001">어트리뷰션 페이로드 설명</span>

| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0001">**Field**</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0002">**데이터 타입**</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0003">**Description**</span> |
| --- | --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0004"><code>adGroupId</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0005">long</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0006">광고 그룹의 식별자입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>attribution 응답을 <code>adGroupId</code> 및 해당 캠페인으로 Apple Ads Campaign Management API에서 상호 연관시키려면 <a href="https://developer.apple.com/documentation/apple_ads/Get-Ad-Group-Level-Reports">@@TOKEN_1@@</a>를 사용합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0007"><code>adId</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0008">long</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0009"><code>ad</code> 객체와 광고 그룹 간의 할당 관계를 나타내는 식별자입니다. 이 ID는 iOS 15.2 이상에서 실행되는 기기에 적용됩니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>Apple Ads Campaign Management API에서 <code>adId</code>를 기준으로 어트리뷰션 응답을 연계하려면 <a href="https://developer.apple.com/documentation/apple_ads/Get-Ad-Level-Reports">@@TOKEN_2@@</a> 를 사용합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0010"><code>attribution</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0011">boolean</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0012">어트리뷰션 값입니다. 사용자가 앱 다운로드 전 최대 30일 전까지 Apple Ads 광고를 클릭했거나 광고 조회 후 24시간 이내에 조회한 경우 <code>true</code>가 반환됩니다. API에서 일치하는 어트리뷰션 레코드를 찾지 못하면 어트리뷰션 값은 <code>false</code>입니다. 자세한 내용은 <code>claimType</code>을 참조합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0013"><code>campaignId</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0014">long</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0015">캠페인의 고유 식별자입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a><code>campaignId</code>로 Apple Ads Campaign Management API에서 어트리뷰션 응답을 연계하려면 <a href="https://developer.apple.com/documentation/apple_ads/Get-Campaign-Level-Reports">@@TOKEN_1@@</a> 를 사용합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0016"><code>claimType</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0017">string</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0018">표준 및 상세 페이로드 모두에 반환됩니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>뷰스루 어트리뷰션의 경우 <code>claimType</code>은 Apple Ads 캠페인에서 광고를 본 사용자 중 광고를 탭하지 않은 사용자를 24시간 이내로 표시하며 값이 <code>Impression</code>입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>참고: 뷰스루 어트리뷰션에서는 연령 및 성별 타겟팅 조건이 있는 캠페인의 값이 <code>false</code>입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>탭스루 어트리뷰션의 경우 <code>claimType</code>은 사용자가 광고를 탭했음을 나타내는 <code>Click</code> 값이 됩니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>참고: 탭스루 어트리뷰션 창은 30일이며, 탭스루가 뷰스루보다 우선 적용됩니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0019"><code>clickDate</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0020">date/time 문자열</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0021">해당 캠페인에서 사용자가 광고를 탭한 날짜와 시간입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>이 필드는 상세 어트리뷰션 응답 페이로드에만 표시됩니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0022"><code>conversionType</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0023">string</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0024">전환 유형입니다. 값은 <code>Download</code>, <code>Redownload</code>, <code>PreOrder</code>입니다. <code>PreOrder</code> 값은 클릭과 조회 모두를 어트리뷰션합니다. 클릭으로부터 30일 이내 또는 조회로부터 1일 이내에 선주문이 이루어진 경우, 클릭스루의 조회 기간은 90일입니다. 뷰스루의 조회 기간은 61일입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>전환 유형은 Apple Ads Campaign Management API의 캠페인 보고서에 표시됩니다. 자세한 내용은 <a href="https://developer.apple.com/documentation/apple_ads/ExtendedSpendRow">@@TOKEN_4@@</a> 객체를 참조합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0025"><code>countryOrRegion</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0026">string</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0027">캠페인의 국가 또는 지역입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png&gt;자세한 내용은 Apple Ads Campaign Management API의 [@@TOKEN_0@@](https://developer.apple.com/documentation/apple_ads/ReportingRequest">None</a> <code>groupBy</code> 섹션을 참조합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0028"><code>impressionDate</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0029">UTC 문자열</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0030">해당 Apple Ads 캠페인에서 광고 조회가 발생한 날짜와 시간입니다. <code>impressionDate</code> 속성은 상세 광고 뷰스루 어트리뷰션 응답 페이로드에만 나타납니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0031"><code>keywordId</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0032">long</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0033">키워드의 식별자입니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>Apple Ads Campaign Management API에서 <code>keywordId</code>로 어트리뷰션 응답을 연계하려면 <a href="https://developer.apple.com/documentation/apple_ads/Get-Keyword-Level-Reports">@@TOKEN_1@@</a>를 사용합니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>참고: 검색 일치(search match)를 사용하면 API가 어트리뷰션 응답에 <code>keywordId</code>를 반환하지 않습니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>자세한 내용은 <a href="https://developer.apple.com/documentation/Apple_Ads/ad-groups">@@TOKEN_3@@</a> 를 참조합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0034"><code>orgId</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0035">long</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0036">캠페인을 소유한 조직의 식별자입니다. <code>orgId</code>는 Apple Ads Advanced의 계정과 동일합니다. !<a href="https://docs-assets.developer.apple.com/published/e5f51b2395970bdf7acf42b6603b53c9/spacer.png">None</a>Apple Ads Campaign Management API에서 <a href="https://developer.apple.com/documentation/apple_ads/Get-User-ACL">@@TOKEN_1@@</a> 을 호출해 <code>orgId</code>를 가져옵니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0037"><code>supplyPlacement</code></span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0038">string</span> | <span class="ko-segment" data-segment-id="seg:table:attribution-payload-descriptions:0043:0039">캠페인의 광고 배치입니다.</span> |

###### <span class="ko-segment" data-segment-id="seg:heading:supplyplacement-descriptions:0044:0001">공급 위치 설명</span>

| <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0001">**Value**</span> | <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0002">**Description**</span> |
| --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0003"><code>APPSTORE_PRODUCT_PAGES</code></span> | <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0004">App Store의 제품 페이지 광고는 앱 페이지를 탐색하는 사용자를 대상으로 하며, 사용자가 아래로 스크롤할 때 “You Might Also Like” 목록 상단에 표시됩니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0005"><code>APPSTORE_SEARCH_RESULTS</code></span> | <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0006">검색 결과 광고는 사용자가 특정 항목을 검색할 때 관련 검색 결과 내에 광고를 노출해 도달할 수 있게 합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0007"><code>APPSTORE_SEARCH_TAB</code></span> | <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0008">검색 탭 광고는 사용자가 특정 항목을 검색하기 전, 검색 탭의 추천 앱 목록 맨 위에 눈에 잘 보이는 위치로 광고를 표시해 도달할 수 있게 합니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0009"><code>APPSTORE_TODAY_TAB</code></span> | <span class="ko-segment" data-segment-id="seg:table:supplyplacement-descriptions:0045:0010">Today 탭 광고는 사용자가 방문을 시작할 때 App Store의 첫 화면에서 사용자에게 도달할 수 있게 합니다.</span> |

---

<span class="ko-segment" data-segment-id="seg:paragraph:supplyplacement-descriptions:0047:0001">*<a href="https://developer.apple.com/documentation/adservices/aaattribution/attributiontoken(">Apple Developer에서 보기</a>)*</span>
